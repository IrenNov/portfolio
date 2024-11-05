document.querySelectorAll('.rotate-hover').forEach((wrapper) => {
    wrapper.addEventListener('mousemove', (event) => {
        const { offsetWidth: width, offsetHeight: height } = wrapper;
        const { offsetX: x, offsetY: y } = event;

        const rotateY = ((y / height) - 0.5) * 10; // Настройте угол поворота по оси X
        const rotateX = ((x / width) - 0.5) * -90; // Настройте угол поворота по оси Y
        const scale = 1.1;
        wrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    });

    wrapper.addEventListener('mouseleave', () => {
        // Плавный сброс поворота с использованием CSS
        wrapper.style.transition = 'transform 0.5s ease'; // Добавляем плавный переход
        wrapper.style.transform = 'rotateX(0deg) rotateY(0deg) scale(0.9)';
    });
});
