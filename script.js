document.addEventListener('DOMContentLoaded', () => {

    const textToType = "I build things for the web.";
    const typingElement = document.getElementById('typing-effect');
    let i = 0;
    
    function typeWriter() {
        if (typingElement) { 
            if (i < textToType.length) {
                typingElement.innerHTML += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, 100); 
            } else {
                typingElement.style.borderRight = 'none';
            }
        }
    }
    typeWriter();

    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (scrollTopBtn) { 
        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        };
        
        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const mainNavMenu = document.getElementById('main-nav-menu');

    if (menuToggleBtn && mainNavMenu) {
        
        menuToggleBtn.addEventListener('click', () => {
            mainNavMenu.classList.toggle('active');
            
            if (mainNavMenu.classList.contains('active')) {
                menuToggleBtn.innerHTML = '✖';
            } else {
                menuToggleBtn.innerHTML = '☰';
            }
        });

        const navLinks = mainNavMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNavMenu.classList.remove('active');
                menuToggleBtn.innerHTML = '☰';
            });
        });
    }

});
