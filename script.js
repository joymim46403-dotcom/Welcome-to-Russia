// Welcome to Russia - Complete Interactive Script
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Welcome to Russia website loaded successfully!');
    
    // ===== LANGUAGE SWITCHER =====
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            langButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const lang = this.textContent;
            alert(`Language switched to ${lang}. Full multilingual support coming soon!`);
        });
    });
    
    // ===== NAVIGATION SMOOTH SCROLL =====
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to section
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ===== CHECKLIST ITEMS =====
    document.querySelectorAll('.check-item').forEach((item, index) => {
        item.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            alert(`Opening detailed guide: ${title}`);
            
            // Mark as completed on click
            if (!this.classList.contains('completed')) {
                this.classList.add('completed');
                const icon = this.querySelector('.check-icon');
                icon.textContent = '✓';
                icon.style.background = '#10b981';
            }
        });
    });
    
    // ===== DETAIL BUTTONS =====
    document.querySelectorAll('.detail-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering parent click
            const stepTitle = this.closest('.check-content').querySelector('h3').textContent;
            alert(`Detailed information for: ${stepTitle}\n\nThis would open a full step-by-step guide with photos, addresses, and contact information.`);
        });
    });
    
    // ===== BUDDY REQUEST FORM =====
    const buddyForm = document.getElementById('buddyRequestForm');
    if (buddyForm) {
        buddyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const country = this.querySelectorAll('input[type="text"]')[1].value;
            
            // Show success message
            alert(`✅ Thank you ${name}!\n\nYour buddy request has been submitted successfully.\n\nWe will match you with a suitable student buddy and contact you at ${email} within 24 hours.\n\nWelcome to Russia! 🇷🇺`);
            
            // Reset form
            this.reset();
            
            // Show confirmation animation
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Request Sent!';
            submitBtn.style.background = '#10b981';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
            }, 3000);
        });
    }
    
    // ===== LOCATION BUTTONS =====
    document.querySelectorAll('.location-btn').forEach(button => {
        button.addEventListener('click', function() {
            const locationType = this.closest('.location-card').querySelector('h3').textContent;
            alert(`📍 Opening directions for ${locationType} in Google Maps.\n\nIn the full version, this would integrate with actual maps and navigation.`);
        });
    });
    
    // ===== CTA BUTTONS =====
    document.querySelectorAll('.primary-btn, .secondary-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#guide') {
                e.preventDefault();
                const guideSection = document.querySelector('#guide');
                window.scrollTo({
                    top: guideSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== SOCIAL LINKS =====
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('i').className.split(' ')[1].replace('fa-', '');
            alert(`Following us on ${platform}...\n\nIn the real website, this would open our social media page.`);
        });
    });
    
    // ===== AUTO ANIMATIONS =====
    // Animate stats on scroll
    function animateStats() {
        const stats = document.querySelectorAll('.stat h3');
        stats.forEach(stat => {
            const finalNumber = parseInt(stat.textContent);
            let current = 0;
            const increment = finalNumber / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= finalNumber) {
                    current = finalNumber;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
            }, 30);
        });
    }
    
    // Trigger stats animation when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) observer.observe(heroSection);
    
    // ===== WELCOME MESSAGE =====
    setTimeout(() => {
        console.log('🌍 Project "Welcome to Russia" ready to help international students!');
        console.log('📧 Contact: help@welcometorussia.org');
        console.log('🏫 Supported by Lobachevsky University');
    }, 1000);
    
    // ===== PAGE LOAD INDICATOR =====
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== EXTRA FEATURES =====
// Current date in footer
window.addEventListener('load', function() {
    const date = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const dateElement = document.createElement('p');
    dateElement.textContent = `Last updated: ${date}`;
    dateElement.style.textAlign = 'center';
    dateElement.style.color = '#9ca3af';
    dateElement.style.marginTop = '10px';
    
    const footerBottom = document.querySelector('.footer-bottom');
    if (footerBottom) {
        footerBottom.appendChild(dateElement);
    }
    
    // Set current year in copyright
    const yearSpan = document.querySelector('.footer-bottom p');
    if (yearSpan && yearSpan.textContent.includes('2024')) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = yearSpan.textContent.replace('2024', currentYear);
    }
});
