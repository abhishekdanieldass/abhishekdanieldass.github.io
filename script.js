// Theme Toggle
const toggle = document.getElementById('themeToggle');
const body = document.body;

toggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    toggle.innerHTML = body.classList.contains('dark') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Fade-in on Scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.1 };

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
