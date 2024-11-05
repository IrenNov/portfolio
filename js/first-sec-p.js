document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const textElements = entry.target.querySelectorAll('.transition');

            if (entry.isIntersecting) {
                textElements.forEach(textElement => {
                    textElement.classList.remove('out-of-view');
                    textElement.classList.add('in-view');
                });
            } else {
                textElements.forEach(textElement => {
                    textElement.classList.remove('in-view');
                    textElement.classList.add('out-of-view');
                });
            }
        });
    }, {
        root: null, 
        threshold: 0.6 
    });

    const targetSection = document.getElementById('first-section');
    if (targetSection) {
        observer.observe(targetSection);
    }

});
