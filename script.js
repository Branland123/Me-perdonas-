var hasForgiven = false;

document.getElementById('btn-no').onclick = function() {
    var btnNo = document.getElementById('btn-no');
    var randomX = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    var randomY = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    btnNo.style.position = 'absolute';
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';

    var message = document.getElementById('message');
    if (hasForgiven) {
        message.textContent = 'No que si me perdonabas 🥺';
        message.style.display = 'block';
    }
};

document.getElementById('btn-yes').onclick = function() {
    var message = document.getElementById('message');
    if (hasForgiven) {
        message.textContent = 'Por eso te quiero💕';
        message.style.display = 'block';
        message.classList.add('animate-heartbeat');
    } else {
        message.textContent = 'Gashias te queño mushiooo ❤️';
        message.style.display = 'block';
        message.classList.add('animate-heartbeat');
        hasForgiven = true;
    }
};