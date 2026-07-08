const buttons = document.querySelectorAll("button");
const modal = document.getElementById("learnMoreModal");
const closeBtn = document.querySelector(".modal-close");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent.trim();

    // Check if this is the "Contact Us" button in the contact section
    if (buttonText === "Contact Us") {
      alert("Contact us at: info@aiuniverse.com\nPhone: +1-800-AI-UNIVERSE\nOr visit our contact page for more information.");
    }
    // Check if this is the "Get Started" button in the hero section
    else if (buttonText === "Get Started") {
      // The parent anchor tag will handle the navigation to #tools
      // Show a helpful onboarding message
      alert("Welcome! Let's get you started with AI Universe.\n\nExplore our AI Tools below and discover how AI can transform your work.");
    }
    // Check if this is the "Learn More" button
    else if (buttonText === "Learn More") {
      // Open modal instead of scrolling
      modal.classList.add("show");
    }
    else {
      alert("Welcome to AI Universe!");
    }
  });
});

// Close modal when clicking the X button
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Close modal when clicking outside the modal content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    modal.classList.remove("show");
  }
});