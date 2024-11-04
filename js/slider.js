document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.sites__item');
    const dotsContainer = document.querySelector('.sites__dots');
    let currentSlide = 0;

    // Создаем точки для каждого слайда
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('sites__dot');
        if (index === currentSlide) {
            dot.classList.add('sites__dot--active');
        }
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.sites__dot');

    // Функция для перехода к конкретному слайду
    function goToSlide(index) {
        slides[index].scrollIntoView({ behavior: 'smooth' });
        updateDots(index);
        currentSlide = index;
    }

    // Обновление активной точки
    function updateDots(index) {
        dots.forEach(dot => dot.classList.remove('sites__dot--active'));
        dots[index].classList.add('sites__dot--active');
    }

    // Используем IntersectionObserver для отслеживания текущего слайда
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Слайд должен быть наполовину виден, чтобы считаться активным
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(slides).indexOf(entry.target);
                updateDots(index);
                currentSlide = index;
            }
        });
    }, observerOptions);

    slides.forEach(slide => observer.observe(slide));
});
