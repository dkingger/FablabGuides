'use strict';
(() => {
    const filters = document.getElementById('tool-filters');
    const checkboxes = Array.from(filters.querySelectorAll('input[type="checkbox"]'));
    const tiles = Array.from(document.querySelectorAll('#tools-grid .tool-item'));
    const count = document.getElementById('tool-count');
    const empty = document.getElementById('tools-empty');

    function updateTools() {
        const selected = new Set(checkboxes.filter(input => input.checked).map(input => input.value));
        let visible = 0;
        tiles.forEach(tile => {
            tile.hidden = !tile.dataset.category.split(/\s+/).some(category => selected.has(category));
            if (!tile.hidden) visible++;
        });
        count.textContent = `${visible} af ${tiles.length} værktøjer vises`;
        empty.hidden = visible !== 0;
    }

    // Start with every category selected, including after browser form restoration.
    function showAll() {
        checkboxes.forEach(input => { input.checked = true; });
        updateTools();
    }
    filters.addEventListener('change', updateTools);
    document.getElementById('show-all-tools').addEventListener('click', showAll);
    document.getElementById('hide-all-tools').addEventListener('click', () => {
        checkboxes.forEach(input => { input.checked = false; });
        updateTools();
    });
    window.addEventListener('pageshow', showAll);
    showAll();
    filters.hidden = false;
})();
