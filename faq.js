// FAQ toggle logic
document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach(item => {
      item.addEventListener("click", () => {
        // Close all other items
        faqItems.forEach(el => {
          if (el !== item) el.classList.remove("active");
        });
  
        // Toggle current
        item.classList.toggle("active");
      });
    });
  });
  