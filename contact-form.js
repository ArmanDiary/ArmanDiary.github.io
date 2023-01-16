document.querySelector('.contact__form-el--submit').addEventListener('click', function(e) {
    e.preventDefault();
    let thankYouMessage = document.createElement('div');
    thankYouMessage.classList.add('thank-you-message');
    thankYouMessage.innerHTML = 'Thank you for your message!';
    document.querySelector('.contact__form').appendChild(thankYouMessage);
    setTimeout(function() {
        thankYouMessage.remove();
    }, 3000);
});
