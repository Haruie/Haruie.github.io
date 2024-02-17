function showMessage(message) {
    document.getElementById('message').innerText = message;
}

function growButton(buttonId) {
    var button = document.getElementById(buttonId);
    button.style.transform = 'scale(1.2)';
    setTimeout(function() {
        button.style.transform = 'scale(1)';
    }, 300);
}
