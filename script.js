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

const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

const navLinks = document.querySelectorAll('.nav-menu .nav-links a');


function toggleMenu() {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');  
}

menuToggle.addEventListener('click', toggleMenu);

function closeMenu() {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
}


navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});




    }


            
        
    

});
