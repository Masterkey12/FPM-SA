// ===================================
// FPM WEBSITE - JAVASCRIPT
// Version HTML/CSS Statique
// ===================================

// DOM Elements
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

// Mobile Menu Toggle
if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = this.querySelectorAll('span');
    if (nav.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      nav.classList.remove('active');
      const spans = mobileMenuToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
});

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
  }
  
  // Hide header on scroll down, show on scroll up
  if (currentScroll > lastScroll && currentScroll > 500) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Stat Counter Animation
function animateValue(element, start, end, duration, prefix = '', suffix = '') {
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end;
      clearInterval(timer);
    }
    element.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
  }, 16);
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
      
      // Animate stats
      if (entry.target.classList.contains('stat-value')) {
        const value = parseInt(entry.target.getAttribute('data-value'));
        const prefix = entry.target.getAttribute('data-prefix') || '';
        const suffix = entry.target.getAttribute('data-suffix') || '';
        animateValue(entry.target, 0, value, 2000, prefix, suffix);
      }
      
      // Animate progress bars
      if (entry.target.classList.contains('progress-bar-fill')) {
        const width = entry.target.getAttribute('data-width');
        setTimeout(() => {
          entry.target.style.width = width;
        }, 200);
      }
      
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards, stats, and progress bars
document.querySelectorAll('.card, .stat-card, .testimonial, .process-step').forEach(el => {
  observer.observe(el);
});

document.querySelectorAll('.stat-value').forEach(el => {
  observer.observe(el);
});

document.querySelectorAll('.progress-bar-fill').forEach(el => {
  observer.observe(el);
});

// Active navigation highlight
function setActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const linkPath = link.getAttribute('href');
    
    if (currentPath === linkPath || 
        (currentPath.includes(linkPath) && linkPath !== '/' && linkPath !== '/index.html')) {
      link.classList.add('active');
    }
    
    // Special case for home page
    if ((currentPath === '/' || currentPath === '/index.html') && 
        (linkPath === '/' || linkPath === '/index.html')) {
      link.classList.add('active');
    }
  });
}

setActiveNav();

// Form validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert('Veuillez entrer une adresse email valide.');
      return;
    }
    
    // Success message (in production, this would send to server)
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    contactForm.reset();
  });
}

// Partners carousel auto-scroll
const partnersScroll = document.querySelector('.partners-scroll');
if (partnersScroll) {
  // Clone partners for infinite scroll
  const partnersContent = partnersScroll.innerHTML;
  partnersScroll.innerHTML = partnersContent + partnersContent;
}

// Print functionality
function printPage() {
  window.print();
}

// Back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--fpm-cyan);
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  z-index: 999;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    backToTopBtn.style.opacity = '1';
    backToTopBtn.style.visibility = 'visible';
  } else {
    backToTopBtn.style.opacity = '0';
    backToTopBtn.style.visibility = 'hidden';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

backToTopBtn.addEventListener('mouseenter', () => {
  backToTopBtn.style.transform = 'translateY(-3px) scale(1.05)';
  backToTopBtn.style.background = 'var(--fpm-blue-dark)';
});

backToTopBtn.addEventListener('mouseleave', () => {
  backToTopBtn.style.transform = 'translateY(0) scale(1)';
  backToTopBtn.style.background = 'var(--fpm-cyan)';
});

// Lazy loading images
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lozad.js/1.16.0/lozad.min.js';
  document.body.appendChild(script);
  
  script.onload = () => {
    const observer = lozad();
    observer.observe();
  };
}

// Console log for debugging
console.log('FPM Website loaded successfully');
console.log('Current page:', window.location.pathname);
