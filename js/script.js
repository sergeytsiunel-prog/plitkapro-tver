// Main script file
document.addEventListener('DOMContentLoaded', function() {
    console.log('ПлиткаPRO - сайт запущен!');
    
    // Smooth scrolling for navigation links (will be added later)
    // Header background on scroll (will be added later)
    
    // Form submission handler
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо! Мы свяжемся с вами в ближайшее время для бесплатного замера.');
            this.reset();
        });
    }
});