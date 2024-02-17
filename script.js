function showMessage(message) {
    document.getElementById('message').innerText = message;
}

function growButton() {
    var noBtn = document.getElementById('noBtn');
    noBtn.style.transform = 'scale(1.2)';
    setTimeout(function() {
        noBtn.style.transform = 'scale(1)';
    }, 300);
}
