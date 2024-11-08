document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const textElements = entry.target.querySelectorAll('.animate');

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
        threshold: 0.56 
    });
    

    const targetSection = document.getElementById('aboutme');
    if (targetSection) {
        observer.observe(targetSection);
    }

    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
        observer.observe(portfolioSection);
    }

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }

    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
        observer.observe(contactsSection);
    }
});
