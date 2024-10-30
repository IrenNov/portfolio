window.onload = function () {
    document.body.classList.add('loaded_hiding'); // Добавляем класс для скрытия
    window.setTimeout(function () {
        document.body.classList.add('loaded'); // Добавляем класс для отображения
        document.body.classList.remove('loaded_hiding'); // Убираем класс скрытия
    }, 2000); // Время в миллисекундах
}
