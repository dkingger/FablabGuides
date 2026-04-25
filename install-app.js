(function () {
    var doc = document;
    var lang = (doc.documentElement.lang || 'da').toLowerCase();
    var isEnglish = lang.indexOf('en') === 0;

    var text = {
        da: {
            button: 'Foj til hjemmeskaerm',
            iosTitle: 'Foj siden til hjemmeskaerm',
            iosSteps: 'Tryk Del i Safari og vaelg "Foj til hjemmeskaerm".',
            close: 'Luk'
        },
        en: {
            button: 'Add to Home Screen',
            iosTitle: 'Add this site to Home Screen',
            iosSteps: 'Tap Share in Safari, then choose "Add to Home Screen".',
            close: 'Close'
        }
    };

    var t = isEnglish ? text.en : text.da;
    var ua = navigator.userAgent || '';
    var isIOS = /iPhone|iPad|iPod/i.test(ua);
    var isStandalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;

    if (isStandalone) {
        return;
    }

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('/sw.js').catch(function () {
                // Ignore SW registration errors; install button still works where supported.
            });
        });
    }

    var deferredPrompt = null;
    var button = doc.createElement('button');
    button.type = 'button';
    button.textContent = t.button;
    button.setAttribute('aria-label', t.button);
    button.style.position = 'fixed';
    button.style.right = '16px';
    button.style.bottom = '16px';
    button.style.zIndex = '9999';
    button.style.border = '0';
    button.style.padding = '12px 16px';
    button.style.borderRadius = '999px';
    button.style.fontSize = '14px';
    button.style.fontWeight = '700';
    button.style.cursor = 'pointer';
    button.style.background = '#111111';
    button.style.color = '#ffffff';
    button.style.boxShadow = '0 10px 24px rgba(0, 0, 0, 0.2)';
    button.style.display = 'none';

    function showButton() {
        if (!doc.body.contains(button)) {
            doc.body.appendChild(button);
        }
        button.style.display = 'inline-flex';
        button.style.alignItems = 'center';
        button.style.gap = '8px';
    }

    function showIosHelp() {
        var existing = doc.getElementById('a2hs-ios-help');
        if (existing) {
            existing.style.display = 'block';
            return;
        }

        var panel = doc.createElement('div');
        panel.id = 'a2hs-ios-help';
        panel.style.position = 'fixed';
        panel.style.left = '16px';
        panel.style.right = '16px';
        panel.style.bottom = '76px';
        panel.style.zIndex = '10000';
        panel.style.background = '#ffffff';
        panel.style.color = '#111111';
        panel.style.border = '1px solid #dddddd';
        panel.style.borderRadius = '12px';
        panel.style.padding = '14px';
        panel.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.18)';

        var title = doc.createElement('strong');
        title.textContent = t.iosTitle;
        title.style.display = 'block';
        title.style.marginBottom = '6px';

        var steps = doc.createElement('p');
        steps.textContent = t.iosSteps;
        steps.style.margin = '0 0 10px 0';
        steps.style.fontSize = '14px';

        var close = doc.createElement('button');
        close.type = 'button';
        close.textContent = t.close;
        close.style.border = '0';
        close.style.padding = '8px 12px';
        close.style.borderRadius = '8px';
        close.style.cursor = 'pointer';
        close.style.background = '#111111';
        close.style.color = '#ffffff';
        close.addEventListener('click', function () {
            panel.style.display = 'none';
        });

        panel.appendChild(title);
        panel.appendChild(steps);
        panel.appendChild(close);
        doc.body.appendChild(panel);
    }

    window.addEventListener('beforeinstallprompt', function (event) {
        event.preventDefault();
        deferredPrompt = event;
        showButton();
    });

    if (isIOS) {
        showButton();
    }

    button.addEventListener('click', function () {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.finally(function () {
                deferredPrompt = null;
                button.style.display = 'none';
            });
            return;
        }

        if (isIOS) {
            showIosHelp();
        }
    });
})();
