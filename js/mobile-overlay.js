const menuButton = document.getElementById('btn_mobile-overlay');
const menu = document.getElementById('mobile-overlay');

menuButton.addEventListener('click', () => {
    
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';

    
    if (!isExpanded) {
        menu.classList.add('mobile-overlay');
        menuButton.classList.add('active');
        menuButton.setAttribute('aria-expanded', 'true');
    } else {
        menu.classList.remove('mobile-overlay');
        menuButton.classList.remove('active');
        menuButton.setAttribute('aria-expanded', 'false');
    }
});

document.addEventListener('click', (event) => {
    const isClickInsideMenu = menuButton.contains(event.target);

    if (!isClickInsideMenu && menuButton.getAttribute('aria-expanded') === 'true') {
        menu.classList.remove('mobile-overlay');
        menuButton.classList.remove('active');
        menuButton.setAttribute('aria-expanded', 'false');
    }
});

menuButton.addEventListener('touchstart', () => {
    menuButton.classList.toggle('active');
});



