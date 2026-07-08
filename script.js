const buttons = document.querySelectorAll("button");

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
      // Scroll to features section
      document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
    }
    else {
      alert("Welcome to AI Universe!");
    }
  });
});