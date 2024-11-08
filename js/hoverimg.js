document.querySelectorAll('.rotate-hover').forEach((wrapper) => {
    wrapper.addEventListener('mousemove', (event) => {
        const { offsetWidth: width, offsetHeight: height } = wrapper;
        const { offsetX: x, offsetY: y } = event;

        const rotateY = ((y / height) - 0.5) * 10;
        const rotateX = ((x / width) - 0.5) * -90;
        const scale = 1.1;
        wrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    });

    wrapper.addEventListener('mouseleave', () => {

        wrapper.style.transition = 'transform 0.5s ease';
        wrapper.style.transform = 'rotateX(0deg) rotateY(0deg) scale(0.9)';
    });
});
