document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const submitBtn = document.querySelector(".btn-submit");
  const formContainer = document.querySelector(".contact-section");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default HTML form action

    // Get form values
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Validate fields
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Button loading state
    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;

    // Save to localStorage (optional)
    localStorage.setItem("contactName", name);
    localStorage.setItem("contactEmail", email);

    try {
      // Submit form via Formspree
      const response = await fetch("https://formspree.io/f/myzwyjpb", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      if (response.ok) {
        // Show thank-you message
        formContainer.innerHTML = `
          <div class="thank-you-message" style="text-align:center; padding: 40px; animation: fadeIn 1s ease-in;">
            <h2 style="color: #6aff8c; font-size: 2rem;">✅ Thanks for contacting Hero.X!</h2>
            <p style="font-size: 1.2rem;">I’ll reply via <strong>Discord</strong> or <strong>Email</strong> soon.</p>
            <div style="margin-top: 20px;">
              <a href="https://discord.com/users/1351116002380746865" target="_blank" class="discord-btn" style="
                background: #5865F2;
                color: white;
                padding: 10px 20px;
                border-radius: 8px;
                display: inline-block;
                text-decoration: none;
                font-weight: bold;
              ">Message on Discord</a>
            </div>
          </div>
        `;
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Form error:", err);
      alert("Failed to send. Check your connection or try later.");
    } finally {
      // Reset button (if form wasn’t replaced)
      submitBtn.innerText = "Send Message";
      submitBtn.disabled = false;
    }
  });
});

// Optional animation CSS (add to your global.css)
/*
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
*/
