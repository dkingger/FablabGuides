(function () {
    const lang = document.documentElement.lang === 'en' ? 'en' : 'da';
    const t = {
        da: {
            prev: 'Tilbage', next: 'Næste',
            sectionLabel: 'Sektion', sectionsLabel: 'Sektioner',
            stepsLabel: 'Trin', categoryLabel: 'Kategori',
            goToStepPrefix: 'Gå til trin',
            comingSoon: 'Guide under udvikling',
            unavailableTitle: 'Indholdet er ikke tilgængeligt endnu.',
            unavailableDesc: 'Den oprindelige side i repoet har ikke noget færdigt guideindhold endnu. Derfor viser redesignen her en klargjort, stylet placeholder i samme designlinje som resten af sitet.',
            backToGuides: 'Tilbage til guideoversigten',
            viewCurrentSite: 'Se nuværende site',
            navAll: 'Alle guides', navMachines: 'Maskiner', navMaterials: 'Materialer', navSiteName: 'Nuværende site',
            goToGuide: 'Gå til guiden', guideOverview: 'Til guideoversigten',
            footerText: 'Velkommen til den nye redesign-version af den oprindelige FabLab',
            toFront: 'Til forsiden',
            closeImg: 'Luk billede',
            relatedTitle: 'Andre guides i samme kategori',
            brandAriaLabel: 'Til forsiden',
            currentSiteHref: 'old/index.html',
            langSwitchText: 'English', langSwitchHrefPrefix: 'en/'
        },
        en: {
            prev: 'Back', next: 'Next',
            sectionLabel: 'Section', sectionsLabel: 'Sections',
            stepsLabel: 'Steps', categoryLabel: 'Category',
            goToStepPrefix: 'Go to step',
            comingSoon: 'Guide in progress',
            unavailableTitle: 'Content not yet available.',
            unavailableDesc: 'This guide has not yet been completed. The redesign shows a styled placeholder in the same design as the rest of the site.',
            backToGuides: 'Back to guide overview',
            viewCurrentSite: 'Back to main site',
            navAll: 'All guides', navMachines: 'Machines', navMaterials: 'Materials', navSiteName: 'Current site',
            goToGuide: 'Go to guide', guideOverview: 'Guide overview',
            footerText: 'This page is a redesign version of the original guide with a shared, professional and airy design.',
            toFront: 'Front page',
            closeImg: 'Close image',
            relatedTitle: 'Other guides in the same category',
            brandAriaLabel: 'To front page',
            currentSiteHref: '../old/en/index.html',
            langSwitchText: 'Dansk', langSwitchHrefPrefix: '../'
        }
    }[lang];

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
            { value: guide.sections && guide.sections.length ? guide.sections.length : "-", label: guide.sections && guide.sections.length === 1 ? t.sectionLabel : t.sectionsLabel },
            { value: totalSlides || "-", label: t.stepsLabel },
            { value: guide.category, label: t.categoryLabel }
        ];

        return stats.map(function (stat) {
            return "<div class=\"stat-card interactive\"><strong>" + escapeHtml(stat.value) + "</strong><span>" + escapeHtml(stat.label) + "</span></div>";
        }).join("");
    }

    function renderContentBlock(block) {
        if (block.type === "list") {
            return ""
                + "<div class=\"guide-text-block\">"
                + (block.title ? "<h3>" + escapeHtml(block.title) + "</h3>" : "")
                + "<ul class=\"guide-checklist\">"
                + (block.items || []).map(function (item) {
                    return "<li>" + escapeHtml(item) + "</li>";
                }).join("")
                + "</ul>"
                + "</div>";
        }

        if (block.type === "links") {
            return ""
                + "<div class=\"guide-source-block\">"
                + (block.title ? "<h3>" + escapeHtml(block.title) + "</h3>" : "")
                + "<div class=\"guide-source-list\">"
                + (block.items || []).map(function (item) {
                    return ""
                        + "<a class=\"guide-source-link interactive\" href=\"" + escapeHtml(item.href) + "\" target=\"_blank\" rel=\"noopener\">"
                        + "<strong>" + escapeHtml(item.label) + "</strong>"
                        + (item.description ? "<span>" + escapeHtml(item.description) + "</span>" : "")
                        + "</a>";
                }).join("")
                + "</div>"
                + "</div>";
        }

        if (block.type === "table") {
            return ""
                + "<div class=\"guide-table-wrap\">"
                + (block.title ? "<h3>" + escapeHtml(block.title) + "</h3>" : "")
                + "<table class=\"guide-table\">"
                + "<thead><tr>" + (block.columns || []).map(function (column) {
                    return "<th scope=\"col\">" + escapeHtml(column) + "</th>";
                }).join("") + "</tr></thead>"
                + "<tbody>" + (block.rows || []).map(function (row) {
                    return "<tr>" + row.map(function (cell) {
                        return "<td>" + escapeHtml(cell) + "</td>";
                    }).join("") + "</tr>";
                }).join("") + "</tbody>"
                + "</table>"
                + (block.note ? "<p class=\"table-note\">" + escapeHtml(block.note) + "</p>" : "")
                + "</div>";
        }

        return ""
            + "<div class=\"guide-text-block\">"
            + (block.title ? "<h3>" + escapeHtml(block.title) + "</h3>" : "")
            + (block.text ? "<p>" + escapeHtml(block.text) + "</p>" : "")
            + "</div>";
    }

    function renderSection(section, index) {
        const slides = section.slides || [];
        const contentBlocks = section.content || [];
        return ""
            + "<section class=\"section-card interactive\" id=\"section-" + (index + 1) + "\">"
            + "<div class=\"section-header\">"
            + "<div class=\"section-copy\">"
            + "<span class=\"section-tag\">" + escapeHtml(section.tag || "Guide") + "</span>"
            + "<h2>" + escapeHtml(section.title) + "</h2>"
            + (section.description ? "<p>" + escapeHtml(section.description) + "</p>" : "")
            + "</div>"
            + "<div class=\"section-meta\">"
            + (slides.length ? "<span class=\"pill\">" + slides.length + " " + t.stepsLabel.toLowerCase() + "</span>" : "")
            + (section.meta ? "<span class=\"pill\">" + escapeHtml(section.meta) + "</span>" : "")
            + "</div>"
            + "</div>"
            + (contentBlocks.length ? "<div class=\"guide-content-blocks\">" + contentBlocks.map(renderContentBlock).join("") + "</div>" : "")
            + (slides.length ? "<div class=\"carousel-shell\" data-carousel='" + escapeHtml(JSON.stringify(slides)) + "'>"
            + "<figure class=\"carousel-figure\">"
            + "<img class=\"carousel-image interactive\" src=\"\" alt=\"\" tabindex=\"0\">"
            + "<figcaption class=\"figure-footer\">"
            + "<p class=\"caption\"></p>"
            + "<span class=\"progress\"></span>"
            + "</figcaption>"
            + "</figure>"
            + "<div class=\"carousel-controls\">"
            + "<div class=\"thumb-track\"></div>"
            + "<div class=\"hero-actions\">"
            + "<button type=\"button\" class=\"button button-secondary interactive button-control\" data-action=\"prev\">" + t.prev + "</button>"
            + "<button type=\"button\" class=\"button button-primary interactive button-control\" data-action=\"next\">" + t.next + "</button>"
            + "</div>"
            + "</div>"
            + "</div>" : "")
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
            + "<h2>" + t.relatedTitle + "</h2>"
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
        modal.querySelector("img").src = activeSlide.src;
        modal.querySelector("img").alt = activeSlide.caption;
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
        let currentIndex = 0;

        thumbTrack.innerHTML = slides.map(function (_slide, slideIndex) {
            return "<button type=\"button\" class=\"thumb-button interactive\" data-thumb-index=\"" + slideIndex + "\" aria-label=\"" + t.goToStepPrefix + " " + (slideIndex + 1) + "\"></button>";
        }).join("");

        function renderSlide() {
            const activeSlide = slides[currentIndex];
            image.src = activeSlide.src;
            image.alt = activeSlide.caption;
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
            openModal(slides, currentIndex, function (newIndex) {
                currentIndex = newIndex;
                renderSlide();
            });
        });

        image.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openModal(slides, currentIndex, function (newIndex) {
                    currentIndex = newIndex;
                    renderSlide();
                });
            }
        });

        renderSlide();

        // Touch swipe support for the carousel
        var touchStartX = 0;
        var figure = carouselElement.querySelector(".carousel-figure");
        figure.addEventListener("touchstart", function (ev) {
            touchStartX = ev.changedTouches[0].clientX;
        }, { passive: true });
        figure.addEventListener("touchend", function (ev) {
            var dx = ev.changedTouches[0].clientX - touchStartX;
            if (Math.abs(dx) < 40) { return; }
            currentIndex = dx < 0
                ? (currentIndex + 1) % slides.length
                : (currentIndex - 1 + slides.length) % slides.length;
            renderSlide();
        }, { passive: true });
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
            : "<div class=\"empty-state placeholder-card interactive\"><span class=\"section-tag\">" + t.comingSoon + "</span><strong>" + t.unavailableTitle + "</strong><p>" + t.unavailableDesc + "</p><div class=\"placeholder-actions\"><a class=\"button button-primary interactive\" href=\"index.html#guides\">" + t.backToGuides + "</a><a class=\"button button-secondary interactive\" href=\"" + t.currentSiteHref + "\">" + t.viewCurrentSite + "</a></div></div>";

        app.innerHTML = ""
            + "<div class=\"guide-shell\">"
            + "<header class=\"site-header\">"
            + "<div class=\"container nav-wrap\">"
            + "<a class=\"brand interactive\" href=\"index.html\" aria-label=\"" + t.brandAriaLabel + "\">"
            + "<span class=\"brand-mark\"><img src=\"/billeder/Fablab Logo.svg\" alt=\"FabLab logo\"></span>"
            + "<span class=\"brand-text\"><strong>FabLab</strong><span>Guides</span></span>"
            + "</a>"
            + "<nav class=\"top-nav\" aria-label=\"Guide navigation\">"
            + "<a class=\"nav-link interactive\" href=\"index.html#guides\">" + t.navAll + "</a>"
            + "<a class=\"nav-link interactive\" href=\"maskiner.html\">" + t.navMachines + "</a>"
            + "<a class=\"nav-link interactive\" href=\"materialer.html\">" + t.navMaterials + "</a>"
            + "<a class=\"nav-link interactive\" href=\"" + t.currentSiteHref + "\">" + t.navSiteName + "</a>"
            + "<a class=\"nav-link interactive\" href=\"" + t.langSwitchHrefPrefix + guide.slug + ".html\">" + t.langSwitchText + "</a>"
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
            + "<div class=\"hero-actions\"><a class=\"button button-primary interactive\" href=\"#guide-content\">" + t.goToGuide + "</a><a class=\"button button-secondary interactive\" href=\"index.html#guides\">" + t.guideOverview + "</a></div>"
            + "</div>"
            + "<aside class=\"hero-side\">"
            + "<div class=\"icon-card interactive\"><div class=\"icon-frame\"><img src=\"" + escapeHtml(guide.icon) + "\" alt=\"" + escapeHtml(guide.title) + "\"></div><p>" + escapeHtml(guide.shortDescription || guide.description) + "</p></div>"
            + "</aside>"
            + "</div>"
            + "</section>"
            + "<section class=\"content-section\" id=\"guide-content\"><div class=\"container section-stack\">" + sectionsMarkup + "</div></section>"
            + renderRelatedCards(allGuides, guide)
            + "</main>"
            + "<footer class=\"site-footer\"><div class=\"container footer-wrap\"><p>" + t.footerText + "</p><div class=\"footer-actions\"><a class=\"button button-secondary interactive\" href=\"index.html\">" + t.toFront + "</a></div></div></footer>"
            + "<div class=\"modal\" id=\"image-modal\" aria-hidden=\"true\"><div class=\"modal-panel\"><button class=\"modal-close interactive\" type=\"button\" aria-label=\"" + t.closeImg + "\">&times;</button><img src=\"\" alt=\"\"><p class=\"modal-caption\"></p></div></div>"
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

        // Touch swipe support for the modal
        var modalTouchStartX = 0;
        modal.addEventListener("touchstart", function (ev) {
            modalTouchStartX = ev.changedTouches[0].clientX;
        }, { passive: true });
        modal.addEventListener("touchend", function (ev) {
            if (!modal.classList.contains("is-open")) { return; }
            var dx = ev.changedTouches[0].clientX - modalTouchStartX;
            if (Math.abs(dx) < 40) { return; }
            stepModal(dx < 0 ? 1 : -1);
        }, { passive: true });

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
