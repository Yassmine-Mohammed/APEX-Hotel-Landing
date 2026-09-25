/* ============================================================
   JavascriptFile.js — Apex Hotel
   ============================================================ */

// ── Utility: smooth-scroll to a section by ID ──────────────
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ── Utility: show a feedback message inside a container ────
function showMessage(containerId, text, type) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.textContent = text;
  el.className = 'form-message ' + type; // 'success' | 'error'
}

// ── Utility: basic email regex check ───────────────────────
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ============================================================
// NAVBAR — add .scrolled class after 60 px
// ============================================================
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
})();

// ============================================================
// BOOKING FORM — date + availability validation
// ============================================================
(function initBookingForm() {
  const form = document.getElementById('booking-form');
  if (!form) return;

  // Set today as minimum date for both date pickers
  const today = new Date().toISOString().split('T')[0];
  const checkinInput  = document.getElementById('checkin');
  const checkoutInput = document.getElementById('checkout');

  if (checkinInput)  checkinInput.setAttribute('min', today);
  if (checkoutInput) checkoutInput.setAttribute('min', today);

  // Keep checkout min = checkin value whenever checkin changes
  if (checkinInput && checkoutInput) {
    checkinInput.addEventListener('change', () => {
      checkoutInput.setAttribute('min', checkinInput.value);
      if (checkoutInput.value && checkoutInput.value <= checkinInput.value) {
        checkoutInput.value = '';
      }
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const checkin  = checkinInput  ? checkinInput.value  : '';
    const checkout = checkoutInput ? checkoutInput.value : '';

    if (!checkin) {
      showMessage('booking-msg', 'Please select a check-in date.', 'error');
      checkinInput && checkinInput.focus();
      return;
    }
    if (!checkout) {
      showMessage('booking-msg', 'Please select a check-out date.', 'error');
      checkoutInput && checkoutInput.focus();
      return;
    }
    if (checkout <= checkin) {
      showMessage('booking-msg', 'Check-out must be after check-in.', 'error');
      checkoutInput && checkoutInput.focus();
      return;
    }

    // Success — in a real project you would call your booking API here
    showMessage('booking-msg', '✓ Availability checked! Redirecting to reservation…', 'success');
  });
})();

// ============================================================
// CONTACT FORM — full validation + feedback
// ============================================================
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = (document.getElementById('first-name')?.value || '').trim();
    const lastName  = (document.getElementById('last-name')?.value  || '').trim();
    const email     = (document.getElementById('contact-email')?.value || '').trim();
    const subject   = document.getElementById('contact-subject')?.value || '';
    const message   = (document.getElementById('contact-message')?.value || '').trim();

    if (!firstName || !lastName) {
      showMessage('contact-msg', 'Please enter your full name.', 'error');
      return;
    }
    if (!email || !isValidEmail(email)) {
      showMessage('contact-msg', 'Please enter a valid email address.', 'error');
      return;
    }
    if (!subject) {
      showMessage('contact-msg', 'Please select a subject.', 'error');
      return;
    }
    if (!message) {
      showMessage('contact-msg', 'Please enter your message.', 'error');
      return;
    }

    // Success — in a real project you would POST to your server here
    showMessage('contact-msg', `✓ Thank you, ${firstName}! Your message has been sent.`, 'success');
    form.reset();
  });
})();

// ============================================================
// SERVICES — hover-click interaction (accessible)
// ============================================================
(function initServices() {
  const items = document.querySelectorAll('.service-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const name = item.querySelector('.service-name')?.textContent || 'this service';
      // Non-intrusive feedback: could open a modal; using console for now
      console.info('Service selected:', name);
    });
  });
})();

// ============================================================
// SCROLL REVEAL — fade-in elements with class .reveal
// ============================================================
(function initReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(el => observer.observe(el));
})();
