document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger-menu');
    const navMenu = document.getElementById('nav-menu');

    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        burger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !burger.contains(e.target)) {
            burger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    document.querySelectorAll('a[href^="/"]').forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth < 769) {
                burger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
});