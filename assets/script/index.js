document.getElementById('newsletterForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert('You have subscribed to our newsletter. Your email is: ' + email);
});

alert('Seja Bem-Vindo ao POP HERO! Aqui você encontra tudo sobre o universo dos Super-Heróis.')