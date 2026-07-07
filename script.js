const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Check if this is the "Contact Us" button in the contact section
    if (button.textContent.trim() === "Contact Us") {
      alert("Contact us at: info@aiuniverse.com\nPhone: +1-800-AI-UNIVERSE\nOr visit our contact page for more information.");
    } else {
      alert("Welcome to AI Universe!");
    }
  });
});