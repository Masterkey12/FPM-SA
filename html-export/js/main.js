// ================================================================
// FPM Website - JavaScript Principal
// ================================================================

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const header = document.querySelector('.header');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      const icon = this.querySelector('svg');
      // Toggle between menu and close icon
      if (mobileNav.classList.contains('active')) {
        this.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
      } else {
        this.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
      }
    });
  }

  // Close mobile menu when clicking on a link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileNav.classList.remove('active');
      if (mobileMenuBtn) {
        mobileMenuBtn.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
      }
    });
  });

  // Animated Counter
  function animateCounter(element, target, duration = 2000, prefix = '', suffix = '') {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = prefix + target + suffix;
        clearInterval(timer);
      } else {
        element.textContent = prefix + Math.floor(current) + suffix;
      }
    }, 16);
  }

  // Intersection Observer for counter animation
  const counterElements = document.querySelectorAll('.stat-counter');

  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        entry.target.classList.add('animated');
        const target = parseInt(entry.target.dataset.target);
        const prefix = entry.target.dataset.prefix || '';
        const suffix = entry.target.dataset.suffix || '';
        animateCounter(entry.target, target, 2000, prefix, suffix);
      }
    });
  }, observerOptions);

  counterElements.forEach(counter => {
    observer.observe(counter);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
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

  // Active navigation link highlighting
  function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-desktop a, .mobile-nav a');

    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      if (linkPath === currentPath || (currentPath === '/' && linkPath === '/index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  setActiveNavLink();

  // Fade in animation on scroll
  const fadeElements = document.querySelectorAll('.fade-in-on-scroll');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px'
  });

  fadeElements.forEach(element => {
    fadeObserver.observe(element);
  });

  // Progress bar animation
  const progressBars = document.querySelectorAll('.progress-fill');

  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        entry.target.classList.add('animated');
        const width = entry.target.dataset.width;
        entry.target.style.width = width + '%';
      }
    });
  }, {
    threshold: 0.5
  });

  progressBars.forEach(bar => {
    observer.observe(bar);
  });

  // Year in footer
  const yearElement = document.querySelector('.current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Handle form submissions (basic validation)
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Basic validation
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      });

      if (isValid) {
        // Here you would normally send the form data
        alert('Formulaire soumis avec succès! (Fonctionnalité de démonstration)');
        form.reset();
      } else {
        alert('Veuillez remplir tous les champs obligatoires.');
      }
    });
  });

  // Language selector
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(button => {
    button.addEventListener('click', function() {
      langButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      // Here you would implement actual language switching
      console.log('Switching to language:', this.textContent);
    });
  });

  // Back to top button
  const backToTop = document.createElement('button');
  backToTop.innerHTML = '↑';
  backToTop.className = 'back-to-top';
  backToTop.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: var(--fpm-cyan);
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
    z-index: 999;
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease;
  `;

  document.body.appendChild(backToTop);

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  backToTop.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.backgroundColor = '#00467F';
  });

  backToTop.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.backgroundColor = '#00AFEF';
  });
});
