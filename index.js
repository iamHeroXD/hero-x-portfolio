// index.js

document.addEventListener("DOMContentLoaded", () => {
  // Fade in hero section when page loads
  const heroSection = document.querySelector(".hero-section");
  if (heroSection) {
    heroSection.classList.add("fade-in");
  }

  // Add fade-in to hero image and text individually (optional)
  const heroText = document.querySelector(".hero-text");
  const heroImage = document.querySelector(".hero-image");

  if (heroText) {
    heroText.classList.add("fade-in-left");
  }

  if (heroImage) {
    heroImage.classList.add("fade-in-right");
  }

  // Animate CTA section on load (or could switch to scroll event)
  const ctaSection = document.querySelector(".cta");
  if (ctaSection) {
    ctaSection.classList.add("fade-in-up");
  }
});
