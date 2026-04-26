(function () {
    var doc = document;
    var lang = (doc.documentElement.lang || 'da').toLowerCase();
    var isEnglish = lang.indexOf('en') === 0;

    var text = {
        da: {
            button: 'F\u00f8j til hjemmesk\u00e6rm',
            iosTitle: 'F\u00f8j siden til hjemmesk\u00e6rm',
            iosLead: 'P\u00e5 iPhone og iPad sker installation via Safari.',
            iosStep1: '\u00c5bn siden i Safari.',
            iosStep2: 'Tryk p\u00e5 Del-ikonet.',
            iosStep3: 'V\u00e6lg "F\u00f8j til hjemmesk\u00e6rm".',
            close: 'Luk',
            done: 'Forst\u00e5et'
        },
        en: {
            button: 'Add to Home Screen',
            iosTitle: 'Add this site to Home Screen',
            iosLead: 'On iPhone and iPad, installation is done via Safari.',
            iosStep1: 'Open this page in Safari.',
            iosStep2: 'Tap the Share icon.',
            iosStep3: 'Choose "Add to Home Screen".',
            close: 'Close',
            done: 'Done'
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
    var button = doc.querySelector('[data-install-app-button]');
    var usesExistingButton = Boolean(button);

    if (!button) {
        button = doc.createElement('button');
        button.type = 'button';
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
    }

    button.textContent = t.button;
    button.setAttribute('aria-label', t.button);

    function showButton() {
        button.hidden = false;

        if (!usesExistingButton && !doc.body.contains(button)) {
            doc.body.appendChild(button);
        }

        if (!usesExistingButton) {
            button.style.display = 'inline-flex';
            button.style.alignItems = 'center';
            button.style.gap = '8px';
        }
    }

    function showIosHelp() {
        var existing = doc.getElementById('a2hs-ios-help');
        if (existing) {
            existing.style.display = existing.style.display === 'none' ? 'block' : 'none';
            return;
        }

        var panel = doc.createElement('div');
        panel.id = 'a2hs-ios-help';
        panel.style.background = '#ffffff';
        panel.style.color = '#111111';
        panel.style.border = '1px solid #dddddd';
        panel.style.borderRadius = '14px';
        panel.style.padding = '14px';
        panel.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.14)';

        if (usesExistingButton) {
            panel.style.position = 'relative';
            panel.style.marginTop = '10px';
        } else {
            panel.style.position = 'fixed';
            panel.style.left = '16px';
            panel.style.right = '16px';
            panel.style.bottom = '76px';
            panel.style.zIndex = '10000';
        }

        var title = doc.createElement('strong');
        title.textContent = t.iosTitle;
        title.style.display = 'block';
        title.style.marginBottom = '4px';

        var lead = doc.createElement('p');
        lead.textContent = t.iosLead;
        lead.style.margin = '0 0 10px 0';
        lead.style.fontSize = '14px';
        lead.style.color = '#4b5563';

        var steps = doc.createElement('ol');
        steps.style.margin = '0';
        steps.style.paddingLeft = '18px';
        steps.style.fontSize = '14px';
        steps.style.lineHeight = '1.45';

        [t.iosStep1, t.iosStep2, t.iosStep3].forEach(function (line) {
            var item = doc.createElement('li');
            item.textContent = line;
            item.style.marginBottom = '4px';
            steps.appendChild(item);
        });

        var actions = doc.createElement('div');
        actions.style.display = 'flex';
        actions.style.justifyContent = 'flex-end';
        actions.style.marginTop = '10px';

        var close = doc.createElement('button');
        close.type = 'button';
        close.textContent = usesExistingButton ? t.done : t.close;
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
        panel.appendChild(lead);
        panel.appendChild(steps);
        actions.appendChild(close);
        panel.appendChild(actions);

        if (usesExistingButton && button.parentNode) {
            button.parentNode.insertBefore(panel, button.nextSibling);
        } else {
            doc.body.appendChild(panel);
        }
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
                button.hidden = true;

                if (!usesExistingButton) {
                    button.style.display = 'none';
                }
            });
            return;
        }

        if (isIOS) {
            showIosHelp();
        }
    });
})();
