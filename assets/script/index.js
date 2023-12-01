document.getElementById('newsletterForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert('Você se inscreveu em nossa newsletter. Seu e-mail é: ' + email);
});

alert('Seja Bem-Vindo ao POP HERO! Aqui você encontra tudo sobre o universo dos Super-Heróis.')