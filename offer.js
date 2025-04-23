// offer.js

// Function to handle Buy Now button click
function goToLogin(packName) {
    // Save selected pack to localStorage
    localStorage.setItem("selectedPack", packName);
  
    // Redirect user to login.html (to authenticate before purchase)
    window.location.href = "login.html";
  }
  
  // Optional: Add to cart animations or alerts
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.offer-card');
      const packName = card.querySelector('h2').innerText;
      alert(`✅ ${packName} added to cart! (not stored yet)`);
      // You can expand this to save in localStorage or sessionStorage
    });
  });
  