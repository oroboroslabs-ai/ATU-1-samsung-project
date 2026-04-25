// ATU-1 — Samsung Official Style
// Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 64;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe feature cards, spec cards, and application cards
  document.querySelectorAll('.feature-card, .spec-card, .application-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Phone hover effect
  const heroPhone = document.querySelector('.hero-phone');
  if (heroPhone) {
    heroPhone.addEventListener('mouseenter', () => {
      heroPhone.style.transform = 'scale(1.02) translateY(-10px)';
      heroPhone.style.transition = 'transform 0.3s ease';
    });

    heroPhone.addEventListener('mouseleave', () => {
      heroPhone.style.transform = 'scale(1) translateY(0)';
    });
  }

  // Showcase phone hover effect
  const showcasePhone = document.querySelector('.showcase-phone');
  if (showcasePhone) {
    showcasePhone.addEventListener('mouseenter', () => {
      showcasePhone.style.transform = 'scale(1.02) translateY(-10px)';
      showcasePhone.style.transition = 'transform 0.3s ease';
    });

    showcasePhone.addEventListener('mouseleave', () => {
      showcasePhone.style.transform = 'scale(1) translateY(0)';
    });
  }

  // Console greeting
  console.log('%cATU-1', 'font-weight: 800; font-size: 24px; color: #1428a0;');
  console.log('%cAI Tactical Unit — Samsung × Oroboros Labs', 'font-size: 14px; color: #424242;');
  console.log('%cUniversal intelligence for every home', 'font-size: 12px; color: #757575;');
  console.log('\n🔗 https://oroboros.ai/atu-1');
});