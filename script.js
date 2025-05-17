// FAQ Accordion functionaliteit
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Haal het parent FAQ item op
            const faqItem = question.parentElement;
            
            // Toggle de 'open' class
            faqItem.classList.toggle('open');
            
            // Optioneel: sluit andere open items
            const otherOpenItems = document.querySelectorAll('.faq-item.open');
            otherOpenItems.forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('open');
                }
            });
        });
    });
});
