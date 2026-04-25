// OROBOROS LABS — ATU-1 Presentation Site
// Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

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

  // Observe all cards and metrics
  document.querySelectorAll('.card, .metric, .app').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Phone mockup interaction
  const phone = document.querySelector('.phone');
  if (phone) {
    phone.addEventListener('mouseenter', () => {
      phone.style.transform = 'scale(1.02) rotateY(-5deg)';
      phone.style.transition = 'transform 0.3s ease';
    });

    phone.addEventListener('mouseleave', () => {
      phone.style.transform = 'scale(1) rotateY(0deg)';
    });
  }

  // Dynamic KPI counter animation
  const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(start).toLocaleString();
      }
    }, 16);
  };

  // Animate KPI numbers when visible
  const kpiObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numEl = entry.target.querySelector('.kpi-num');
        if (numEl) {
          const text = numEl.textContent;
          if (text.includes(',')) {
            const num = parseInt(text.replace(/,/g, ''));
            if (!isNaN(num)) {
              animateCounter(numEl, num);
            }
          }
        }
        kpiObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.kpi').forEach(kpi => {
    kpiObserver.observe(kpi);
  });

  // Add subtle parallax effect to hero
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
      hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });

  // Console greeting
  console.log('%cOROBOROS LABS', 'font-weight: 800; font-size: 24px; color: #6366f1;');
  console.log('%cATU-1 — AI Tactical Unit', 'font-size: 14px; color: #8b5cf6;');
  console.log('%c48³ Source Cube Architecture', 'font-size: 12px; color: #22c55e;');
  console.log('\n🔗 https://oroboros.ai/atu-1');
});