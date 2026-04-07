// ─── SMOOTH SCROLL ──────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY;
    const distance = end - start;
    const duration = 1200; // ms — aumente para mais lento
    let startTime = null;

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + distance * easeInOutCubic(progress));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  });
});

// ─── ACCORDION ─────────────────────────────────────────
document.querySelectorAll('.accordion__trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.accordion__item');
    const isOpen = item.classList.contains('is-open');

    document.querySelectorAll('.accordion__item.is-open').forEach(open => {
      open.classList.remove('is-open');
    });

    if (!isOpen) {
      item.classList.add('is-open');
    }
  });
});

// Open first accordion item by default
const firstItem = document.querySelector('.accordion__item');
if (firstItem) firstItem.classList.add('is-open');

// ─── SWIPER INIT ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.servizi__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    freeMode: true,
    grabCursor: true,
  });

  const journalSwiper = new Swiper('.journal__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    freeMode: true,
    grabCursor: true,
  });

  document.querySelector('.journal__arrow--prev')?.addEventListener('click', () => journalSwiper.slidePrev());
  document.querySelector('.journal__arrow--next')?.addEventListener('click', () => journalSwiper.slideNext());
});
