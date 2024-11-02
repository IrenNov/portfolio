document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const textElements = entry.target.querySelectorAll('.animate');

            if (entry.isIntersecting) {
                textElements.forEach(textElement => {
                    // Удаляем out-of-view и добавляем in-view при попадании в зону видимости
                    textElement.classList.remove('out-of-view');
                    textElement.classList.add('in-view');
                });
            } else {
                textElements.forEach(textElement => {
                    // Удаляем in-view и добавляем out-of-view при выходе из зоны видимости
                    textElement.classList.remove('in-view');
                    textElement.classList.add('out-of-view');
                });
            }
        });
    }, {
        root: null, // viewport
        threshold: 0.5 
    });

    // Наблюдаем за секцией с id 'aboutme'
    const targetSection = document.getElementById('aboutme');
    if (targetSection) {
        observer.observe(targetSection);
    }
});
