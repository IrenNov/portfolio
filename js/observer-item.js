document.querySelectorAll('.rotate-hover').forEach((wrapper) => {
    wrapper.addEventListener('mousemove', (event) => {
        const { offsetWidth: width, offsetHeight: height } = wrapper;
        const { offsetX: x, offsetY: y } = event;
        const rotateX = ((y / width) - 0.5) * 40;
        const rotateY = ((x / width) - 0.5) * 40;
        const scale = 1.3;
        wrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    });

    wrapper.addEventListener('mouseleave', () => {
        wrapper.style.transition = 'transform 0.8s ease';
        wrapper.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    });
});


const sliderItems = document.querySelectorAll('.sites__item');
const observerOptions = {
    root: null,
    threshold: 0.6,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {


            entry.target.classList.remove('dimmed');
        } else {


            entry.target.classList.add('dimmed');
        }
    });
}, observerOptions);


sliderItems.forEach(item => observer.observe(item));