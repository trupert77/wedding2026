// ===============================
// Wedding Site Main JS
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // COUNTDOWN
  // ===============================
  const countdownEl = document.getElementById("countdown");

  if (countdownEl) {
    const weddingDate = new Date("September 26, 2026 16:30:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance <= 0) {
        countdownEl.textContent = "It’s Wedding Time! 💍";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );

      countdownEl.textContent =
        `${days} days • ${hours} hrs • ${minutes} mins`;
    }

    updateCountdown();
    setInterval(updateCountdown, 60000);
  }


  // ===============================
  // LOVE.EXE BUTTON
  // ===============================
  window.runLoveExe = function () {
    const statusLine = document.getElementById("statusLine");
    if (!statusLine) return;

    const responses = [
      "Status: ONLINE • Treats: DEPLOYED 🐶",
      "Status: LOYALTY PROTOCOL ACTIVATED ❤️",
      "Status: TAIL WAGGING AT MAXIMUM SPEED",
      "Status: LOVE.EXE RUNNING SUCCESSFULLY 💍",
      "Status: BELLY RUB BUFFER OVERFLOW"
    ];

    const random = responses[Math.floor(Math.random() * responses.length)];
    statusLine.textContent = random;
  };


  // ===============================
  // GALLERY LIGHTBOX
  // ===============================
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  const imgContainer = lightbox.querySelector(".lightbox-img");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  function openLightbox(src, alt) {
    if (!imgContainer) return;

    imgContainer.style.backgroundImage = `url("${src}")`;
    imgContainer.setAttribute("aria-label", alt || "Photo");

    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");

    if (imgContainer) {
      imgContainer.style.backgroundImage = "";
    }

    document.body.style.overflow = "";
  }

  // Click gallery item
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".gallery-item");
    if (!btn) return;

    const full = btn.getAttribute("data-full");
    const thumb = btn.querySelector("img");
    const src = full || (thumb ? thumb.src : null);
    const alt = thumb ? thumb.alt : "Photo";

    if (src) openLightbox(src, alt);
  });

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener("click", closeLightbox);
  }

  // Click outside image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

});
