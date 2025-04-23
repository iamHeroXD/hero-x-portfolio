// Reveal portfolio cards on scroll
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".work-card");
  
    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.9;
  
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
  
        if (cardTop < triggerBottom) {
          card.classList.add("show");
        }
      });
    };
  
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on load
  });
  