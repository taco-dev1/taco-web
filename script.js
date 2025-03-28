// Script to toggle visibility of email upon "Contact Me" button click
document.getElementById("contact-btn").addEventListener("click", function() {
  const email = document.getElementById("email");
  if (email.style.display === "none") {
    email.style.display = "block";
  } else {
    email.style.display = "none";
  }
});
