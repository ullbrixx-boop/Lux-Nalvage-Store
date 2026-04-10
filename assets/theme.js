document.documentElement.classList.remove('no-js');

document.addEventListener('DOMContentLoaded', () => {
  setupHeader();
  setupAnnouncementBar();
  setupAccordions();
  setupFaqFilter();
  setupQuantityControls();
  setupProductGallery();
  setupTrackDemo();
});

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
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      item.classList.toggle('is-open');
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
      mainImage.src = image;
      mainImage.alt = alt;
      thumbs.forEach((item) => item.classList.remove('is-active'));
      thumb.classList.add('is-active');
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
