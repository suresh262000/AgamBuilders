// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle (for responsive navigation)
const nav = document.querySelector('nav');
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '&#9776;'; // Unicode character for hamburger icon

nav.insertBefore(menuToggle, nav.firstChild);

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('open');
});

// Close menu on link click in mobile view
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function () {
        nav.classList.remove('open');
    });
});

// Basic form validation for the contact form
const form = document.querySelector('footer form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('input[type="text"]');
    const email = document.querySelector('input[type="email"]');
    const message = document.querySelector('textarea');

    if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        alert('Please fill out all fields.');
        return;
    }

    if (!validateEmail(email.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Your message has been sent!');
    form.reset();
});

// Helper function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function expandImage(image) {
    var expandedContainer = document.getElementById('expandedImageContainer');
    var expandedImage = document.getElementById('expandedImage');
    expandedContainer.classList.add('active');
    expandedImage.src = image.src;
}

function closeExpandedImage() {
    document.getElementById('expandedImageContainer').classList.remove('active');
}
