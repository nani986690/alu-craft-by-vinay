document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initPortfolio();
    initContactForm();
    initScrollEffects();
});

function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(201, 169, 97, 0.5)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(201, 169, 97, 0.3)';
        }

        lastScroll = currentScroll;
    });
}

function initPortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');

    const projects = [
        {
            title: 'Modern Living Room',
            description: 'Elegant TV unit with modular design',
            image: 'https://uploads.onecompiler.io/429574fxd/442rfc2zb/1000349854.png'
        },
        {
            title: 'Office Partition',
            description: 'Sleek aluminium partitions for workspace',
            image: 'https://uploads.onecompiler.io/429574fxd/442rp2bse/1000349900.jpg'
        },
        {
            title: 'Luxury Villa Interior',
            description: 'Custom aluminium frames and panels',
            image: 'https://uploads.onecompiler.io/429574fxd/442rfc2zb/1000349857.jpg'
        },
        {
            title: 'Contemporary Bedroom',
            description: 'Minimalist design with premium finish',
            image: 'https://uploads.onecompiler.io/429574fxd/442rfc2zb/1000349855.jpg'
        },
        {
            title: 'Dining Area Design',
            description: 'Elegant space with custom panels',
            image: 'https://uploads.onecompiler.io/429574fxd/442rfc2zb/1000349856.jpg'
        },
        {
            title: 'Home Entertainment Unit',
            description: 'Sophisticated TV unit design',
            image: 'https://uploads.onecompiler.io/429574fxd/442rfc2zb/1000349853.jpg'
        }
    ];

    projects.forEach((project, index) => {
        const projectItem = document.createElement('div');
        projectItem.className = 'portfolio-item';
        projectItem.style.animationDelay = `${index * 0.1}s`;

        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="portfolio-image">
            <div class="portfolio-content">
                <h3 class="portfolio-title">${project.title}</h3>
                <p class="portfolio-description">${project.description}</p>
            </div>
        `;

        portfolioGrid.appendChild(projectItem);
    });
}

function initContactForm() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        alert('Thank you for your message! We will contact you soon.');

        form.reset();
    });
}

function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .contact-card');

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}
