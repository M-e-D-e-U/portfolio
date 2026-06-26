document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Мобильді Бургер-Меню интерактивы
    const burger = document.querySelector(".burger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-menu a");

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Меню сілтемесін басқанда менюді жабу
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            burger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });

    // 2. Вау-Эффект: Scroll Animation (Блоктардың пайда болуы)
    const cards = document.querySelectorAll(".glass-card, .project-card");
    
    const checkScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if(cardTop < triggerBottom) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
                card.style.transition = "all 0.6s ease-out";
            }
        });
    };

    // Бастапқы стильді JS арқылы береміз (егер скролл болмаса көрініп тұру үшін)
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
    });

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Бірінші рет жүктелгенде іске қосу
});

// Тышқанның артынан жүретін неон интерактивы
const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    // Неонды жарықты тышқанның координатасына қою
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
    glow.style.opacity = '1'; // Тышқан қозғалғанда жарықты көрсету
});

// Тышқан экраннан шығып кеткенде жарықты жасыру
document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
});