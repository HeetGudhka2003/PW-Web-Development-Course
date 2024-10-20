// Get all menu items with dropdowns

const menuItems = document.querySelectorAll('.menu-item');

// Add hover event listeners to toggle dropdown visibility

menuItems.forEach(item => {

    const dropdown = item.querySelector('.dropdown');

    if (dropdown) {

        item.addEventListener('mouseenter', () => {

            dropdown.style.display = 'block';

        });

        item.addEventListener('mouseleave', () => {

            dropdown.style.display = 'none';
            
        });
    }
});