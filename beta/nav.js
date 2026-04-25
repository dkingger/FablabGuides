(function () {
    var nav = document.getElementById('site-nav');
    if (!nav) return;

    var lang = nav.getAttribute('data-lang') || 'da';
    var page = nav.getAttribute('data-page') || '';
    var isEn = lang === 'en';

    var links = isEn ? [
        { href: 'index.html#guides', key: 'guides',    text: 'Guides' },
        { href: 'maskiner.html',     key: 'maskiner',   text: 'Machines' },
        { href: 'materialer.html',   key: 'materialer', text: 'Materials' },
        { href: 'index.html#besoeg', key: 'besoeg',     text: 'Visit' },
        { href: 'om-fablab.html',    key: 'om-fablab',  text: 'About us' },
        { href: '../index.html',     key: 'lang',       text: 'Dansk' }
    ] : [
        { href: 'index.html#guides', key: 'guides',    text: 'Guides' },
        { href: 'maskiner.html',     key: 'maskiner',   text: 'Maskiner' },
        { href: 'materialer.html',   key: 'materialer', text: 'Materialer' },
        { href: 'index.html#besoeg', key: 'besoeg',     text: 'Bes\u00f8g os' },
        { href: 'om-fablab.html',    key: 'om-fablab',  text: 'Om os' },
        { href: 'en/index.html',     key: 'lang',       text: 'English' }
    ];

    nav.innerHTML = links.map(function (link) {
        var isCurrent = link.key === page;
        return '<a class="nav-link interactive"'
            + (isCurrent ? ' aria-current="page"' : '')
            + ' href="' + link.href + '">'
            + link.text + '</a>';
    }).join('');
})();
