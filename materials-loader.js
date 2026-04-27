/*!
 * materials-loader.js
 * Fetches materials from a Google Sheet (published as CSV) and renders
 * category tables on materialer.html and en/materialer.html.
 *
 * Sheet columns (row 1 = headers):
 *   kategori, materiale, tykkelse, dimensioner, egnet til, pris
 *
 * API: initMaterials({ lang: 'da' | 'en' })
 *      Called inline in each page after this script loads.
 */
(function () {
    'use strict';

    var MATERIALS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTuqq2lorOoIq63uNKIV5sNzGVCfo2Fk55eypb3IM7xSqvHnGTmfXHgwyc3mhd81PYOOqFd-5mPUYFK/pub?output=csv';
    // Optional: publish the "categories" tab as its own CSV and paste URL here.
    // Recommended columns: da,en (or first column Danish + second column English).
    var CATEGORIES_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTuqq2lorOoIq63uNKIV5sNzGVCfo2Fk55eypb3IM7xSqvHnGTmfXHgwyc3mhd81PYOOqFd-5mPUYFK/pub?gid=1247234681&single=true&output=csv';

    // Canonical display order for categories (sheet can have rows in any order)
    var STATIC_CATEGORY_ORDER = [
        'Træ', 'Akryl', '2-lags laminat', 'EVA skum', 'Metal',
        'Upcyclede PLA plader', 'Plader til vacumformer', 'Vinyl', 'Stempelgummi'
    ];

    // Category heading translations (DA key → localised label)
    var STATIC_CATEGORY_LABELS = {
        da: {
            'Træ': 'Træ',
            'Akryl': 'Akryl',
            '2-lags laminat': '2-lags laminat',
            'EVA skum': 'EVA skum',
            'Metal': 'Metal',
            'Upcyclede PLA plader': 'Upcyclede PLA plader',
            'Plader til vacumformer': 'Plader til vacumformer',
            'Vinyl': 'Vinyl',
            'Stempelgummi': 'Stempelgummi'
        },
        en: {
            'Træ': 'Wood',
            'Akryl': 'Acrylic',
            '2-lags laminat': '2-layer laminate',
            'EVA skum': 'EVA foam',
            'Metal': 'Metal',
            'Upcyclede PLA plader': 'Upcycled PLA sheets',
            'Plader til vacumformer': 'Sheets for vacuum former',
            'Vinyl': 'Vinyl',
            'Stempelgummi': 'Stamp rubber'
        }
    };

    // Optional subtitle shown beneath a category heading
    var CATEGORY_NOTES = {
        da: {
            '2-lags laminat': 'Graveringsplader (Resopal/Resopalskilte), hvor toplaget fjernes for at skabe kontrast i bundfarven'
        },
        en: {
            '2-lags laminat': 'Engraving boards (Resopal), where the top layer is removed to create contrast in the base colour'
        }
    };

    // Badge label translations for the "egnet til" column (EN only; DA shown as-is)
    var BADGE_LABELS = {
        en: {
            'Laser': 'Laser',
            'Gravering': 'Engraving',
            'Vandstraale': 'Water jet',
            'Vandskærer': 'Water jet',
            'Vacumformer': 'Vacuum former',
            'Vakumformer': 'Vacuum former',
            'Vinylskaerer': 'Vinyl cutter',
            'Vinylskærer': 'Vinyl cutter'
        }
    };

    // UI strings per language
    var STRINGS = {
        da: {
            colMaterial: 'Materiale',
            colFormat: 'Format',
            colDim: 'Dimensioner',
            colUsage: 'Egnet til',
            colPrice: 'Pris',
            loading: 'Indl\u00e6ser materialer\u2026',
            error: 'Kunne ikke hente materialer. Klik for at pr\u00f8ve igen.',
            empty: 'Ingen materialer tilg\u00e6ngelige i \u00f8jeblikket.',
            updateBtn: 'Opdater priser',
            updatedAt: 'Sidst opdateret:'
        },
        en: {
            colMaterial: 'Material',
            colFormat: 'Format',
            colDim: 'Dimensions',
            colUsage: 'Suitable for',
            colPrice: 'Price',
            loading: 'Loading materials\u2026',
            error: 'Could not load materials. Click to try again.',
            empty: 'No materials available at the moment.',
            updateBtn: 'Update prices',
            updatedAt: 'Last updated:'
        }
    };

    // ── CSV parsing ──────────────────────────────────────────────────────────────

    function parseRow(line) {
        var cols = [], col = '', inQ = false;
        for (var i = 0; i < line.length; i++) {
            var c = line[i];
            if (c === '"') {
                if (inQ && line[i + 1] === '"') { col += '"'; i++; }
                else { inQ = !inQ; }
            } else if (c === ',' && !inQ) {
                cols.push(col); col = '';
            } else {
                col += c;
            }
        }
        cols.push(col);
        return cols;
    }

    function parseCSV(text) {
        var lines = text.trim().split(/\r?\n/);
        if (!lines.length) return [];
        var headers = parseRow(lines[0]).map(function (h) {
            return h.trim().toLowerCase();
        });
        var rows = [];
        for (var i = 1; i < lines.length; i++) {
            var vals = parseRow(lines[i]);
            var row = {};
            headers.forEach(function (h, idx) {
                row[h] = (vals[idx] || '').trim();
            });
            // Skip rows that are completely empty
            if (headers.some(function (h) { return row[h]; })) {
                rows.push(row);
            }
        }
        return rows;
    }

    function firstNonEmpty(row, keys) {
        for (var i = 0; i < keys.length; i++) {
            var v = row[keys[i]];
            if (typeof v === 'string' && v.trim()) return v.trim();
        }
        return '';
    }

    function parseCategoryConfig(rows) {
        if (!rows || !rows.length) return null;

        var sampleKeys = Object.keys(rows[0]);
        var hasMaterialHeaders = sampleKeys.some(function (k) {
            return ['materiale', 'tykkelse', 'dimensioner', 'egnet til', 'pris'].indexOf(k) !== -1;
        });
        var hasDaHeader = sampleKeys.some(function (k) {
            return ['da', 'dansk', 'kategori', 'kategori_da'].indexOf(k) !== -1;
        });
        var hasEnHeader = sampleKeys.some(function (k) {
            return ['en', 'english', 'engelsk', 'kategori_en'].indexOf(k) !== -1;
        });

        // Avoid interpreting materials rows as category definitions.
        if (hasMaterialHeaders) return null;

        var useNamedHeaders = hasDaHeader || hasEnHeader;
        var allowFallbackColumns = !useNamedHeaders && sampleKeys.length <= 2;

        if (!useNamedHeaders && !allowFallbackColumns) return null;

        var order = [];
        var labelsDa = {};
        var labelsEn = {};

        rows.forEach(function (row) {
            var da = '';
            var en = '';

            if (useNamedHeaders) {
                da = firstNonEmpty(row, ['da', 'dansk', 'kategori', 'kategori_da']);
                en = firstNonEmpty(row, ['en', 'english', 'engelsk', 'kategori_en']);
            }

            // Fallback: first column = da, second column = en
            if (!da || !en) {
                var keys = Object.keys(row);
                if (!da && keys[0]) da = (row[keys[0]] || '').trim();
                if (!en && keys[1]) en = (row[keys[1]] || '').trim();
            }

            if (!da) return;
            if (order.indexOf(da) === -1) order.push(da);

            labelsDa[da] = da;
            labelsEn[da] = en || STATIC_CATEGORY_LABELS.en[da] || da;
        });

        if (!order.length) return null;

        return {
            order: order,
            labels: {
                da: labelsDa,
                en: labelsEn
            }
        };
    }

    // ── HTML rendering ───────────────────────────────────────────────────────────

    function esc(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function renderBadges(usageStr, lang) {
        var map = BADGE_LABELS[lang] || {};
        return (usageStr || '').split(',')
            .map(function (b) { return b.trim(); })
            .filter(Boolean)
            .map(function (b) {
                return '<span class="material-badge">' + esc(map[b] || b) + '</span>';
            })
            .join(' ');
    }

    function renderCategories(rows, lang, categoryConfig) {
        var s = STRINGS[lang] || STRINGS.da;
        var labelsSource = (categoryConfig && categoryConfig.labels) || STATIC_CATEGORY_LABELS;
        var labels = labelsSource[lang] || labelsSource.da;
        var categoryOrder = (categoryConfig && categoryConfig.order) || STATIC_CATEGORY_ORDER;
        var notes = CATEGORY_NOTES[lang] || {};

        if (!rows.length) {
            return '<p class="materials-empty">' + s.empty + '</p>';
        }

        // Group rows by kategori, preserving insertion order
        var catMap = Object.create(null);
        var seenOrder = [];
        rows.forEach(function (row) {
            var key = row['kategori'] || '';
            if (!key) return;
            if (!catMap[key]) { catMap[key] = []; seenOrder.push(key); }
            catMap[key].push(row);
        });

        // Canonical order first, then any new categories found in the sheet
        var sorted = categoryOrder.filter(function (c) { return catMap[c]; });
        seenOrder.forEach(function (c) {
            if (sorted.indexOf(c) === -1) sorted.push(c);
        });

        var html = '';
        sorted.forEach(function (catKey) {
            var catRows = catMap[catKey];
            var title = labels[catKey] || catKey;
            var note = notes[catKey];

            html += '<div class="category-block">';

            if (note) {
                html += '<div class="category-head">'
                    + '<h2 class="category-title">' + esc(title) + '</h2>'
                    + '<div class="category-note">' + esc(note) + '</div>'
                    + '</div>';
            } else {
                html += '<h2 class="category-title">' + esc(title) + '</h2>';
            }

            html += '<div class="material-table-wrap"><table class="material-table">'
                + '<thead><tr>'
                + '<th>' + s.colMaterial + '</th>'
                + '<th>' + s.colFormat + '</th>'
                + '<th>' + s.colDim + '</th>'
                + '<th>' + s.colUsage + '</th>'
                + '<th>' + s.colPrice + '</th>'
                + '</tr></thead><tbody>';

            catRows.forEach(function (row) {
                html += '<tr>'
                    + '<td><div class="material-name">' + esc(row['materiale']) + '</div></td>'
                    + '<td>' + esc(row['tykkelse']) + '</td>'
                    + '<td>' + esc(row['dimensioner']) + '</td>'
                    + '<td>' + renderBadges(row['egnet til'], lang) + '</td>'
                    + '<td>' + esc(row['pris']) + '</td>'
                    + '</tr>';
            });

            html += '</tbody></table></div></div>';
        });

        return html;
    }

    // ── Public API ───────────────────────────────────────────────────────────────

    function initMaterials(cfg) {
        var lang = (cfg && cfg.lang) || 'da';
        var s = STRINGS[lang] || STRINGS.da;
        var container = document.getElementById('materials-container');
        var btn = document.getElementById('materials-update-btn');
        var tsEl = document.getElementById('materials-updated-at');

        if (!container) return;

        if (btn) btn.textContent = s.updateBtn;

        function fetchCsv(url, noCache) {
            var finalUrl = noCache
                ? (url + (url.indexOf('?') === -1 ? '?' : '&') + '_t=' + Date.now())
                : url;
            var opts = noCache ? { cache: 'no-store' } : {};

            return fetch(finalUrl, opts).then(function (r) {
                if (!r.ok) throw new Error('HTTP ' + r.status);
                return r.text();
            });
        }

        function load(noCache) {
            container.innerHTML = '<div class="materials-loading">' + s.loading + '</div>';
            if (btn) btn.disabled = true;

            var materialsPromise = fetchCsv(MATERIALS_CSV_URL, noCache)
                .then(function (text) { return parseCSV(text); });

            var categoriesPromise = CATEGORIES_CSV_URL
                ? fetchCsv(CATEGORIES_CSV_URL, noCache)
                    .then(function (text) { return parseCategoryConfig(parseCSV(text)); })
                    .catch(function () { return null; })
                : Promise.resolve(null);

            Promise.all([materialsPromise, categoriesPromise])
                .then(function (result) {
                    var rows = result[0];
                    var categoryConfig = result[1];

                    container.innerHTML = renderCategories(rows, lang, categoryConfig);
                    if (tsEl) {
                        var now = new Date();
                        tsEl.textContent = s.updatedAt + ' '
                            + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    }
                })
                .catch(function () {
                    container.innerHTML = '<p class="materials-error">' + s.error + '</p>';
                    if (btn) btn.disabled = false;
                })
                .then(function () {
                    // runs after both success and error paths
                    if (btn) btn.disabled = false;
                });
        }

        if (btn) {
            btn.addEventListener('click', function () { load(true); });
        }

        load(false);
    }

    window.initMaterials = initMaterials;
}());
