document.addEventListener('DOMContentLoaded', () => {

    // --- THEME SWITCHER --- //
    const themeSwitch = document.getElementById('checkbox');
    const docElement = document.documentElement;

    if (localStorage.getItem('theme') === 'dark') {
        themeSwitch.checked = true;
    }

    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            docElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            docElement.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // --- BACK TO TOP BUTTON --- //
    const backToTopButton = document.getElementById('back-to-top');

    if(backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) { // Show button after scrolling 300px
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- HAMBURGER MENU --- //
    const hamburgerButton = document.getElementById('hamburger-button');
    const navLinks = document.querySelector('.nav-links');

    if(hamburgerButton && navLinks) {
        hamburgerButton.addEventListener('click', () => {
            hamburgerButton.classList.toggle('is-active');
            navLinks.classList.toggle('nav-active');
        });

        // Close menu when a link is clicked
        navLinks.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                hamburgerButton.classList.remove('is-active');
                navLinks.classList.remove('nav-active');
            }
        });
    }

});