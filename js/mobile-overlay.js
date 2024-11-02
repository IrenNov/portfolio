const menuButton = document.getElementById('btn_mobile-overlay');
const menu = document.getElementById('mobile-overlay');


menuButton.addEventListener('click', () => {
    menuButton.classList.add('active');
    // Проверка текущего состояния
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    
    // Переключение атрибутов и класса
    menuButton.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('mobile-overlay', !isExpanded);

    if (!isExpanded) {
        menuButton.classList.add('active'); // Добавляем класс, если меню открыто
    } else {
        menuButton.classList.remove('active'); // Удаляем класс, если меню закрыто
    }

});

document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target) || menuButton.contains(event.target);

    // Если клик не внутри меню или кнопки, и меню открыто, закрываем меню
    if (!isClickInsideMenu && menu.classList.contains('mobile-overlay')) {
        menu.classList.remove('mobile-overlay');
        menuButton.classList.remove('active');
        menuButton.setAttribute('aria-expanded', 'false');
    }
    
});
