document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filters__item');
    const searchInput = document.querySelector('.search__input');
    const courseCards = document.querySelectorAll('.card');

    // --- Filtering Logic ---
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('filters__item--active'));
            // Add active class to the clicked button
            button.classList.add('filters__item--active');

            const filterValue = button.getAttribute('data-filter');

            courseCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- Search Logic ---
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        courseCards.forEach(card => {
            const title = card.querySelector('.card__title').textContent.toLowerCase();
            const author = card.querySelector('.card__author').textContent.toLowerCase();

            if (title.includes(searchTerm) || author.includes(searchTerm)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Reset filter buttons when searching
        if (searchTerm !== '') {
             filterButtons.forEach(btn => btn.classList.remove('filters__item--active'));
        }
    });
});