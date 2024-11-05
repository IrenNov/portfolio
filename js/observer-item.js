const sliderItems = document.querySelectorAll('.rotate-hover');
const observerOptions = {
  root: null, // Вся область просмотра
  threshold: 0.6, // Процент видимости элемента (90%)
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
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
      // Если элемент более чем на 90% видим, убираем класс затемнения
      entry.target.classList.remove('dimmed');
    } else {
      // Если менее чем на 90%, добавляем затемнение
    
      entry.target.classList.add('dimmed');
    }
  });
}, observerOptions);

// Применяем observer ко всем элементам слайда
sliderItems.forEach(item => observer.observe(item));