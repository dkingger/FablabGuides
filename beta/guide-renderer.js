(function () {
    const modalState = {
        slides: [],
        index: 0,
        onIndexChange: null
    };

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function renderHeroStats(guide) {
        const totalSlides = (guide.sections || []).reduce(function (sum, section) {
            return sum + (section.slides ? section.slides.length : 0);
        }, 0);

        const stats = guide.stats || [
            { value: guide.sections && guide.sections.length ? guide.sections.length : "-", label: guide.sections && guide.sections.length === 1 ? "Sektion" : "Sektioner" },
            { value: totalSlides || "-", label: totalSlides === 1 ? "Trin" : "Trin" },
            { value: guide.category, label: "Kategori" }
        ];

        return stats.map(function (stat) {
            return "<div class=\"stat-card interactive\"><strong>" + escapeHtml(stat.value) + "</strong><span>" + escapeHtml(stat.label) + "</span></div>";
        }).join("");
    }

    function renderSection(section, index) {
        const slides = section.slides || [];
        return ""
            + "<section class=\"section-card interactive\" id=\"section-" + (index + 1) + "\">"
            + "<div class=\"section-header\">"
            + "<div class=\"section-copy\">"
            + "<span class=\"section-tag\">" + escapeHtml(section.tag || "Guide") + "</span>"
            + "<h2>" + escapeHtml(section.title) + "</h2>"
            + (section.description ? "<p>" + escapeHtml(section.description) + "</p>" : "")
            + "</div>"
            + "<div class=\"section-meta\">"
            + "<span class=\"pill\">" + slides.length + " trin</span>"
            + (section.meta ? "<span class=\"pill\">" + escapeHtml(section.meta) + "</span>" : "")
            + "</div>"
            + "</div>"
            + "<div class=\"carousel-shell\" data-carousel='" + escapeHtml(JSON.stringify(slides)) + "'>"
            + "<figure class=\"carousel-figure\">"
            + "<img class=\"carousel-image interactive\" src=\"\" alt=\"\" tabindex=\"0\">"
            + "<div class=\"carousel-link-panel\" hidden><p class=\"carousel-link-label\"></p><a class=\"carousel-link-btn\" href=\"\" target=\"_blank\" rel=\"noopener noreferrer\">Åbn software</a></div>"
            + "<figcaption class=\"figure-footer\">"
            + "<p class=\"caption\"></p>"
            + "<span class=\"progress\"></span>"
            + "</figcaption>"
            + "</figure>"
            + "<div class=\"carousel-controls\">"
            + "<div class=\"thumb-track\"></div>"
            + "<div class=\"hero-actions\">"
            + "<button type=\"button\" class=\"button button-secondary interactive button-control\" data-action=\"prev\">Tilbage</button>"
            + "<button type=\"button\" class=\"button button-primary interactive button-control\" data-action=\"next\">Næste</button>"
            + "</div>"
            + "</div>"
            + "</div>"
            + "</section>";
    }

    function renderRelatedCards(allGuides, currentGuide) {
        const related = Object.keys(allGuides)
            .map(function (key) { return allGuides[key]; })
            .filter(function (guide) {
                return guide.slug !== currentGuide.slug && guide.category === currentGuide.category;
            })
            .slice(0, 3);

        if (!related.length) {
            return "";
        }

        return ""
            + "<section class=\"related-section\">"
            + "<div class=\"container\">"
            + "<h2>Andre guides i samme kategori</h2>"
            + "<div class=\"related-grid\">"
            + related.map(function (guide) {
                return ""
                    + "<a class=\"related-card interactive\" href=\"" + escapeHtml(guide.slug + ".html") + "\">"
                    + "<img src=\"" + escapeHtml(guide.icon) + "\" alt=\"" + escapeHtml(guide.title) + " ikon\">"
                    + "<div><strong>" + escapeHtml(guide.title) + "</strong><p>" + escapeHtml(guide.shortDescription || guide.description) + "</p></div>"
                    + "</a>";
            }).join("")
            + "</div>"
            + "</div>"
            + "</section>";
    }

    function renderModalSlide() {
        const modal = document.getElementById("image-modal");
        if (!modal || !modalState.slides.length) {
            return;
        }

        const activeSlide = modalState.slides[modalState.index];
        if (!activeSlide.link) {
            modal.querySelector("img").src = activeSlide.src;
            modal.querySelector("img").alt = activeSlide.caption;
        }
        modal.querySelector(".modal-caption").textContent = activeSlide.caption;
    }

    function stepModal(direction) {
        if (!modalState.slides.length) {
            return;
        }

        modalState.index = (modalState.index + direction + modalState.slides.length) % modalState.slides.length;
        renderModalSlide();

        if (typeof modalState.onIndexChange === "function") {
            modalState.onIndexChange(modalState.index);
        }
    }

    function openModal(slides, index, onIndexChange) {
        const modal = document.getElementById("image-modal");
        if (!modal || !slides || !slides.length) {
            return;
        }

        modalState.slides = slides;
        modalState.index = index;
        modalState.onIndexChange = onIndexChange;

        renderModalSlide();
        modal.classList.add("is-open");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        const modal = document.getElementById("image-modal");
        if (!modal) {
            return;
        }

        modal.classList.remove("is-open");
        document.body.style.overflow = "";
        modalState.slides = [];
        modalState.index = 0;
        modalState.onIndexChange = null;
    }

    function initializeCarousel(carouselElement) {
        const slides = JSON.parse(carouselElement.dataset.carousel || "[]");
        if (!slides.length) {
            return;
        }

        const image = carouselElement.querySelector(".carousel-image");
        const caption = carouselElement.querySelector(".caption");
        const progress = carouselElement.querySelector(".progress");
        const thumbTrack = carouselElement.querySelector(".thumb-track");
        const previousButton = carouselElement.querySelector('[data-action="prev"]');
        const nextButton = carouselElement.querySelector('[data-action="next"]');
        const linkPanel = carouselElement.querySelector(".carousel-link-panel");
        const linkBtn = linkPanel && linkPanel.querySelector(".carousel-link-btn");
        const linkLabel = linkPanel && linkPanel.querySelector(".carousel-link-label");
        let currentIndex = 0;

        thumbTrack.innerHTML = slides.map(function (_slide, slideIndex) {
            return "<button type=\"button\" class=\"thumb-button interactive\" data-thumb-index=\"" + slideIndex + "\" aria-label=\"Gå til trin " + (slideIndex + 1) + "\"></button>";
        }).join("");

        function renderSlide() {
            const activeSlide = slides[currentIndex];
            if (activeSlide.link) {
                image.hidden = true;
                if (linkPanel) {
                    linkPanel.hidden = false;
                    if (linkBtn) linkBtn.href = activeSlide.link;
                    if (linkLabel) linkLabel.textContent = activeSlide.link;
                }
            } else {
                image.hidden = false;
                image.src = activeSlide.src;
                image.alt = activeSlide.caption;
                if (linkPanel) linkPanel.hidden = true;
            }
            caption.textContent = activeSlide.caption;
            progress.textContent = (currentIndex + 1) + " / " + slides.length;

            thumbTrack.querySelectorAll(".thumb-button").forEach(function (thumbButton, thumbIndex) {
                thumbButton.classList.toggle("is-active", thumbIndex === currentIndex);
            });
        }

        previousButton.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            renderSlide();
        });

        nextButton.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % slides.length;
            renderSlide();
        });

        thumbTrack.addEventListener("click", function (event) {
            const button = event.target.closest("[data-thumb-index]");
            if (!button) {
                return;
            }

            currentIndex = Number(button.dataset.thumbIndex);
            renderSlide();
        });

        image.addEventListener("click", function () {
            if (slides[currentIndex].link) { return; }
            openModal(slides, currentIndex, function (newIndex) {
                currentIndex = newIndex;
                renderSlide();
            });
        });

        image.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                if (slides[currentIndex].link) { return; }
                openModal(slides, currentIndex, function (newIndex) {
                    currentIndex = newIndex;
                    renderSlide();
                });
            }
        });

        renderSlide();
    }

    document.addEventListener("DOMContentLoaded", function () {
        const app = document.getElementById("guide-app");
        const key = document.body.dataset.guideKey;
        const allGuides = window.betaGuideData || {};
        const guide = allGuides[key];

        if (!app || !guide) {
            return;
        }

        const sections = guide.sections || [];
        const sectionsMarkup = sections.length
            ? sections.map(renderSection).join("")
            : "<div class=\"empty-state placeholder-card interactive\"><span class=\"section-tag\">Guide under udvikling</span><strong>Indholdet er ikke tilgængeligt endnu.</strong><p>Den oprindelige side i repoet har ikke noget færdigt guideindhold endnu. Derfor viser betaen her en klargjort, stylet placeholder i samme designlinje som resten af sitet.</p><div class=\"placeholder-actions\"><a class=\"button button-primary interactive\" href=\"index.html#guides\">Tilbage til guideoversigten</a><a class=\"button button-secondary interactive\" href=\"../index.html\">Se nuværende site</a></div></div>";

        app.innerHTML = ""
            + "<div class=\"guide-shell\">"
            + "<header class=\"site-header\">"
            + "<div class=\"container nav-wrap\">"
            + "<a class=\"brand interactive\" href=\"index.html\" aria-label=\"Til beta-forsiden\">"
            + "<span class=\"brand-mark\"><img src=\"../billeder/Fablab Logo.svg\" alt=\"FabLab Vejle logo\"></span>"
            + "<span class=\"brand-text\"><strong>FabLab Vejle</strong><span>Beta guides</span></span>"
            + "</a>"
            + "<nav class=\"top-nav\" aria-label=\"Guide navigation\">"
            + "<a class=\"nav-link interactive\" href=\"index.html#guides\">Alle guides</a>"
            + "<a class=\"nav-link interactive\" href=\"maskiner.html\">Maskiner</a>"
            + "<a class=\"nav-link interactive\" href=\"materialer.html\">Materialer</a>"
            + "<a class=\"nav-link interactive\" href=\"../index.html\">Nuværende site</a>"
            + "</nav>"
            + "</div>"
            + "</header>"
            + "<main>"
            + "<section class=\"hero-section\">"
            + "<div class=\"container hero-grid\">"
            + "<div class=\"hero-card interactive\">"
            + "<span class=\"eyebrow\">" + escapeHtml(guide.eyebrow || guide.category) + "</span>"
            + "<h1>" + escapeHtml(guide.title) + "</h1>"
            + "<p class=\"lead\">" + escapeHtml(guide.description) + "</p>"
            + "<div class=\"hero-pills\">" + (guide.highlights || []).map(function (highlight) { return "<span class=\"pill\">" + escapeHtml(highlight) + "</span>"; }).join("") + "</div>"
            + "<div class=\"stats-grid\">" + renderHeroStats(guide) + "</div>"
            + "<div class=\"hero-actions\"><a class=\"button button-primary interactive\" href=\"#guide-content\">Gå til guiden</a><a class=\"button button-secondary interactive\" href=\"index.html#guides\">Til guideoversigten</a></div>"
            + "</div>"
            + "<aside class=\"hero-side\">"
            + "<div class=\"icon-card interactive\"><div class=\"icon-frame\"><img src=\"" + escapeHtml(guide.icon) + "\" alt=\"" + escapeHtml(guide.title) + " ikon\"></div><p>" + escapeHtml(guide.shortDescription || guide.description) + "</p></div>"
            + "<div class=\"hero-note-card interactive\"><strong>Beta-overhaling</strong><p class=\"hero-note\">Alle beta-guides bruger nu samme visuelle system, samme knapper og samme bløde micro-interactions som forsiden.</p></div>"
            + "</aside>"
            + "</div>"
            + "</section>"
            + "<section class=\"content-section\" id=\"guide-content\"><div class=\"container section-stack\">" + sectionsMarkup + "</div></section>"
            + renderRelatedCards(allGuides, guide)
            + "</main>"
            + "<footer class=\"site-footer\"><div class=\"container footer-wrap\"><p>Denne side er en beta-version af den oprindelige guide, men med et fælles, mere professionelt og luftigt design.</p><div class=\"footer-actions\"><a class=\"button button-secondary interactive\" href=\"index.html\">Til beta-forsiden</a><a class=\"button button-primary interactive\" href=\"../index.html\">Til live forsiden</a></div></div></footer>"
            + "<div class=\"modal\" id=\"image-modal\" aria-hidden=\"true\"><div class=\"modal-panel\"><button class=\"modal-close interactive\" type=\"button\" aria-label=\"Luk billede\">&times;</button><img src=\"\" alt=\"\"><p class=\"modal-caption\"></p></div></div>"
            + "</div>";

        app.querySelectorAll("[data-carousel]").forEach(initializeCarousel);

        const modal = document.getElementById("image-modal");
        modal.addEventListener("click", function (event) {
            if (event.target.classList.contains("modal-close") || event.target === modal) {
                closeModal();
                return;
            }

            const modalImage = modal.querySelector("img");
            const imageRect = modalImage.getBoundingClientRect();
            const clickIsOnImage = event.clientX >= imageRect.left
                && event.clientX <= imageRect.right
                && event.clientY >= imageRect.top
                && event.clientY <= imageRect.bottom;

            if (!clickIsOnImage) {
                return;
            }

            const imageCenterX = imageRect.left + (imageRect.width / 2);
            if (event.clientX < imageCenterX) {
                stepModal(-1);
            } else {
                stepModal(1);
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeModal();
                return;
            }

            if (!modal.classList.contains("is-open")) {
                return;
            }

            if (event.key === "ArrowLeft") {
                stepModal(-1);
            }

            if (event.key === "ArrowRight") {
                stepModal(1);
            }
        });
    });
}());