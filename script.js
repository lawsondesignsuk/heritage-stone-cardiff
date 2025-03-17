document.addEventListener('DOMContentLoaded', function () {
    // JavaScript for Toggle Menu
    const menuButton = document.getElementById('menu-button');
    const navbarMenu = document.getElementById('navbar-menu');

    menuButton.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        menuButton.textContent = navbarMenu.classList.contains('active') ? '✖' : '☰';
    });

    // Accordion Functionality
    function showAccordion(index) {
        const tabs = document.querySelectorAll('.accordion-tab');
        const contents = document.querySelectorAll('.accordion-content');

        tabs.forEach((tab, i) => {
            tab.classList.toggle('active', i === index);
            contents[i].classList.toggle('active', i === index);
        });
    }

    // Add event listeners to each accordion tab
    const accordionTabs = document.querySelectorAll('.accordion-tab');
    accordionTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => showAccordion(index));
    });

    // FAQ Accordion functionality
    const faqHeaders = document.querySelectorAll('.faq-header');

    faqHeaders.forEach((header, index) => {
        header.addEventListener('click', function () {
            const body = this.nextElementSibling;

            // Toggle the current FAQ body
            if (body.style.display === 'block') {
                body.style.display = 'none';
            } else {
                // Close all other FAQ bodies
                document.querySelectorAll('.faq-body').forEach((content) => {
                    content.style.display = 'none';
                });

                // Open the clicked FAQ body
                body.style.display = 'block';
            }
        });
    });

    // Popup functionality
    const popupOverlay = document.getElementById('popup-overlay');
    const closeBtn = document.getElementById('close-btn');

    // Show popup after 5 seconds
    setTimeout(() => {
        popupOverlay.style.display = 'flex';
    }, 7000);

    document.addEventListener('DOMContentLoaded', function () {
        // Close popup
        const closeBtn = document.getElementById('close-btn');
        const popupOverlay = document.getElementById('popup-overlay');
    
        if (closeBtn && popupOverlay) {
            closeBtn.addEventListener('click', () => {
                popupOverlay.style.display = 'none';
            });
        } else {
            console.error('Close button or popup overlay element not found.');
        }
    
        // Menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
    
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', function () {
                navLinks.classList.toggle('active');
            });
        } else {
            console.error('Menu toggle or nav-links element not found.');
        }
    });
    

    // Lightbox functionality
    function openLightbox(imgElement) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');

        lightbox.style.display = 'flex';
        lightboxImg.src = imgElement.src;
    }

    function closeLightbox() {
        document.getElementById('lightbox').style.display = 'none';
    }
});
