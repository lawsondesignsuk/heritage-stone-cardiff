window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.add("open");
});

document.getElementById("close-menu").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.remove("open");
});

document.querySelectorAll(".mobile-dropdown > a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    this.parentElement.classList.toggle("open");
  });
});

// Popup control for Heritage Stone Cardiff
(function () {
  const overlay = document.getElementById('popupOverlay');
  const closeBtn = document.getElementById('closePopup');

  if (!overlay) return;

  function showPopup() {
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    closeBtn?.focus();
  }
  function hidePopup() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
  }

  // Close interactions
  closeBtn?.addEventListener('click', hidePopup);
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) hidePopup();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      hidePopup();
    }
  });

  // Auto-show shortly after load (800ms)
  window.addEventListener('load', () => {
    setTimeout(showPopup, 800);
  });
})();

