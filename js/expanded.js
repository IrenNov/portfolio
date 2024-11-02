const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
    paragraph.addEventListener('click', () => {
        paragraph.classList.toggle('expanded'); 
    });
});