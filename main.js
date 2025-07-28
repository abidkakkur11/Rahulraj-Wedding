// Create floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💕';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    document.querySelector('.floating-hearts').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Create hearts periodically
setInterval(createHeart, 2000);

// Smooth scroll effect for any future navigation
document.addEventListener('DOMContentLoaded', function() {
    // Add entrance animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    });

    document.querySelectorAll('.detail-card').forEach(card => {
        observer.observe(card);
    });
});

// Remove the parallax effect to keep the background fixed
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const background = document.querySelector('.background');
//     if (background) {
//         background.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// });

// Confirm Presence Modal & Audio
document.addEventListener('DOMContentLoaded', function() {
    // Modal logic
    const confirmBtn = document.getElementById('confirmBtn');
    const confirmModal = document.getElementById('confirmModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const kalyanamAudio = document.getElementById('kalyanamAudio');

    if (confirmBtn && confirmModal && closeModalBtn && kalyanamAudio) {
        confirmBtn.addEventListener('click', function() {
            confirmModal.style.display = 'flex';
            kalyanamAudio.currentTime = 0;
            kalyanamAudio.play();
        });

        closeModalBtn.addEventListener('click', function() {
            confirmModal.style.display = 'none';
            kalyanamAudio.pause();
            kalyanamAudio.currentTime = 0;
        });

        // Optional: Close modal on overlay click
        confirmModal.addEventListener('click', function(e) {
            if (e.target === confirmModal) {
                confirmModal.style.display = 'none';
                kalyanamAudio.pause();
                kalyanamAudio.currentTime = 0;
            }
        });
    }
});