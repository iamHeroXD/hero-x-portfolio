// login.js

// Get selected pack name from localStorage and display it
document.addEventListener("DOMContentLoaded", () => {
    const packName = localStorage.getItem("selectedPack");
    const packDisplay = document.getElementById("selected-pack-name");
    if (packName) {
      packDisplay.textContent = packName;
    } else {
      packDisplay.textContent = "Unknown Pack";
    }
  });
  
  // Handle form submission
  const form = document.getElementById("login-form");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const agreed = document.getElementById("terms").checked;
    const pack = localStorage.getItem("selectedPack");
  
    if (!name || !email || !agreed) {
      alert("Please complete all fields and agree to the terms.");
      return;
    }
  
    // Example: EmailJS integration (requires setup)
    // emailjs.send("service_id", "template_id", {
    //   from_name: name,
    //   user_email: email,
    //   selected_pack: pack,
    // }).then(() => {
    //   console.log("Email sent successfully");
    // });
  
    // Simulated successful submission
    alert("✅ Thank you! Hero.X will contact you on Discord soon.");
  
    // Clear pack and redirect to thank you page
    localStorage.removeItem("selectedPack");
    window.location.href = "thankyou.html";
  });
  