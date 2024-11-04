const menuButton = document.getElementById('btn_mobile-overlay');
const menu = document.getElementById('mobile-overlay');

menuButton.addEventListener('click', () => {
    // Проверяем текущее состояние
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';

    // Если меню открывается, добавляем класс "active", если закрывается - удаляем его
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

// Закрытие меню при клике за его пределами
document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target) || menuButton.contains(event.target);

    // Если клик не внутри меню или кнопки, и меню открыто, закрываем меню
    if (!isClickInsideMenu && menuButton.getAttribute('aria-expanded') === 'true') {
        menu.classList.remove('mobile-overlay');
        menuButton.classList.remove('active');
        menuButton.setAttribute('aria-expanded', 'false');
    }
});
