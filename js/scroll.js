const scrollContainer = document.querySelector('.sites__list'); // Замените на ваш класс

scrollContainer.addEventListener('wheel', (event) => {
    event.preventDefault();

    // Параметры для scrollBy
    const scrollAmount = event.deltaY > 0 ? 200 : -200; // Настройте по желанию
    const duration = 500; // Длительность анимации
    const easing = 'cubic-bezier(0.6,-0.28,0.74,0.05)'; // Ваша кривая

    // Настройка анимации
    scrollContainer.scrollBy({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
});
