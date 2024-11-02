// Responsive Navigation Menu
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${
                    index / 7 + 0.3
                }s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Accessibility for Burger Menu
    burger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            burger.click();
        }
    });
};

navSlide();

// Change Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scrolling
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document
            .querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });

        // Close mobile menu after clicking a link
        if (window.innerWidth < 768) {
            const nav = document.querySelector('.nav-links');
            nav.classList.remove('nav-active');
            const burger = document.querySelector('.burger');
            burger.classList.remove('toggle');
            navLinks.forEach((link) => {
                link.style.animation = '';
            });
        }
    });
});

// Dark Mode Toggle
const toggleSwitch = document.getElementById('dark-mode-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
});
