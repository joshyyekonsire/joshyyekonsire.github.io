// Initialize EmailJS with your public API key
console.log("Initializing EmailJS...");
emailjs.init("mbO5dg-t7tsVp07ig");

// Send the email when the form is submitted
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Define the parameters for your email template
  var templateParams = {
    from_name: document.getElementById('name').value,
    from_email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };

  // Send the email using EmailJS
  console.log("Sending email...");
  alert("Message sent successfully")
  const form = document.getElementById('contact-form');
  
});