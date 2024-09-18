function submitForm(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    alert("Thank you for your fedback!"); // Show the message in a popup
    document.getElementById("contactForm").reset(); // Reset the form fields
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your time! Visit us again.');
    document.getElementById('contactForm').reset(); // Clear the form after submission
});