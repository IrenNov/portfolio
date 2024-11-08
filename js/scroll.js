const scrollContainer = document.querySelector('.sites__list'); 

scrollContainer.addEventListener('wheel', (event) => {
    event.preventDefault();

   
    const scrollAmount = event.deltaY > 0 ? 200 : -200; 
    const duration = 500; 
    const easing = 'cubic-bezier(0.6,-0.28,0.74,0.05)'; 

    
    scrollContainer.scrollBy({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
});
