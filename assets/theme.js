document.documentElement.classList.remove('no-js');

document.addEventListener('DOMContentLoaded', () => {
  setupMotion();
  setupHeader();
  setupAnnouncementBar();
  setupAccordions();
  setupFaqFilter();
  setupQuantityControls();
  setupProductGallery();
  setupTrackDemo();
});

function setupMotion() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.documentElement.classList.add('reduced-motion');
    return;
  }

  document.documentElement.classList.add('has-motion');

  const heroTargets = [
    ...document.querySelectorAll('.hero__tagline, .hero__copy h1, .hero__copy p, .hero__actions, .hero__trust-item, .hero__media, .page-hero .eyebrow, .page-hero h1, .page-hero p')
  ];

  heroTargets.forEach((element, index) => {
    element.classList.add('motion-enter');
    element.style.setProperty('--motion-delay', `${Math.min(index, 7) * 90}ms`);
  });

  window.requestAnimationFrame(() => {
    heroTargets.forEach((element) => element.classList.add('is-visible'));
  });

  const revealSelectors = [
    '.section-intro',
    '.feature-strip > *',
    '.trust-pillars > *',
    '.collection-grid > *',
    '.product-grid > *',
    '.home-about > *',
    '.home-editorial > *',
    '.home-testimonials > *',
    '.home-hero__microcopy',
    '.home-hero__caption',
    '.cta-band',
    '.collection-hero > *',
    '.product-layout > *',
    '.contact-layout > *',
    '.about-story > *',
    '.value-grid > *',
    '.stats-grid > *',
    '.faq-list > *',
    '.timeline-card',
    '.article-card',
    '.track-form',
    '.track-result',
    '.policy-highlight',
    '.table-list__row',
    '.numbered-list > *',
    '.simple-grid > *',
    '.cart-line',
    '.search-result-card',
    '.footer-columns > *'
  ];

  const revealTargets = Array.from(document.querySelectorAll(revealSelectors.join(',')));
  revealTargets.forEach((element, index) => {
    element.classList.add('motion-reveal');
    element.style.setProperty('--motion-delay', `${(index % 6) * 70}ms`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: '0px 0px -80px 0px'
    }
  );

  revealTargets.forEach((element) => observer.observe(element));
}

function setupHeader() {
  const header = document.querySelector('[data-site-header]');
  if (!header) return;

  const toggles = document.querySelectorAll('[data-toggle-target]');
  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const targetId = toggle.getAttribute('data-toggle-target');
      const target = targetId ? document.getElementById(targetId) : null;
      if (!target) return;

      const willOpen = !target.classList.contains('is-open');
      document.querySelectorAll('.header-panel.is-open').forEach((panel) => panel.classList.remove('is-open'));
      if (willOpen) target.classList.add('is-open');
    });
  });

  document.addEventListener('click', (event) => {
    const clickedInside = event.target instanceof Element && header.contains(event.target);
    if (clickedInside) return;
    document.querySelectorAll('.header-panel.is-open').forEach((panel) => panel.classList.remove('is-open'));
  });

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function setupAnnouncementBar() {
  const messages = Array.from(document.querySelectorAll('[data-announcement-message]'));
  if (messages.length <= 1) return;

  let index = 0;
  window.setInterval(() => {
    messages[index].classList.remove('is-active');
    index = (index + 1) % messages.length;
    messages[index].classList.add('is-active');
  }, 3500);
}

function setupAccordions() {
  document.querySelectorAll('[data-accordion]').forEach((item) => {
    const trigger = item.querySelector('[data-accordion-trigger]');
    const content = item.querySelector('.accordion-content');
    if (!trigger) return;

    if (content instanceof HTMLElement) {
      content.style.maxHeight = item.classList.contains('is-open') ? `${content.scrollHeight}px` : '0px';
    }

    trigger.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      item.classList.toggle('is-open', willOpen);

      if (content instanceof HTMLElement) {
        content.style.maxHeight = willOpen ? `${content.scrollHeight}px` : '0px';
      }
    });
  });
}

function setupFaqFilter() {
  const root = document.querySelector('[data-faq-root]');
  if (!root) return;

  const searchInput = root.querySelector('[data-faq-search]');
  const buttons = root.querySelectorAll('[data-faq-category-button]');
  const items = root.querySelectorAll('[data-faq-item]');
  let currentCategory = '';

  const applyFilter = () => {
    const query = searchInput instanceof HTMLInputElement ? searchInput.value.trim().toLowerCase() : '';
    let visibleCount = 0;

    items.forEach((item) => {
      const question = item.getAttribute('data-question')?.toLowerCase() || '';
      const answer = item.getAttribute('data-answer')?.toLowerCase() || '';
      const category = item.getAttribute('data-category') || '';
      const matchesSearch = !query || question.includes(query) || answer.includes(query);
      const matchesCategory = !currentCategory || currentCategory === category;
      const visible = matchesSearch && matchesCategory;
      item.classList.toggle('hidden', !visible);
      if (visible) visibleCount += 1;
    });

    const empty = root.querySelector('[data-faq-empty]');
    if (empty) empty.classList.toggle('hidden', visibleCount > 0);
  };

  if (searchInput instanceof HTMLInputElement) {
    searchInput.addEventListener('input', applyFilter);
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-faq-category-button') || '';
      currentCategory = currentCategory === category ? '' : category;
      buttons.forEach((btn) => btn.classList.toggle('is-active', btn === button && currentCategory !== ''));
      applyFilter();
    });
  });

  applyFilter();
}

function setupQuantityControls() {
  document.querySelectorAll('[data-quantity]').forEach((root) => {
    const input = root.querySelector('input');
    const decrease = root.querySelector('[data-quantity-decrease]');
    const increase = root.querySelector('[data-quantity-increase]');
    if (!(input instanceof HTMLInputElement)) return;

    decrease?.addEventListener('click', () => {
      const current = Number(input.value) || 1;
      input.value = String(Math.max(1, current - 1));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });

    increase?.addEventListener('click', () => {
      const current = Number(input.value) || 1;
      input.value = String(current + 1);
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });
}

function setupProductGallery() {
  const gallery = document.querySelector('[data-product-gallery]');
  if (!gallery) return;

  const mainImage = gallery.querySelector('[data-product-main-image]');
  const thumbs = gallery.querySelectorAll('[data-product-thumb]');
  if (!(mainImage instanceof HTMLImageElement)) return;

  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const image = thumb.getAttribute('data-image');
      const alt = thumb.getAttribute('data-alt') || '';
      if (!image) return;
      mainImage.classList.add('is-switching');
      mainImage.src = image;
      mainImage.alt = alt;
      thumbs.forEach((item) => item.classList.remove('is-active'));
      thumb.classList.add('is-active');
      window.setTimeout(() => {
        mainImage.classList.remove('is-switching');
      }, 220);
    });
  });
}

function setupTrackDemo() {
  const root = document.querySelector('[data-track-demo]');
  if (!root) return;

  const form = root.querySelector('form');
  const result = root.querySelector('[data-track-result]');
  const orderField = root.querySelector('[name="tracking_order"]');
  const orderDisplay = root.querySelector('[data-track-order-number]');
  if (!(form instanceof HTMLFormElement) || !result) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (orderDisplay && orderField instanceof HTMLInputElement) {
      orderDisplay.textContent = orderField.value.trim() || 'ORD-DEMO123';
    }
    result.classList.remove('hidden');
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
