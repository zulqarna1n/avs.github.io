document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! We will get back to you shortly.');
    // Reset the form
    document.getElementById('contact-form').reset();
});
