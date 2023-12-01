document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert('You have subscribed to our newsletter. Your email is: ' + email);
});