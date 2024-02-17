let growthFactor = 1.2;

function showMessage(message) {
    document.getElementById('message').innerText = message;
}

function growButton() {
    var yesBtn = document.getElementById('yesBtn');
    yesBtn.style.transform = `scale(${growthFactor})`;
    growthFactor += 0.2;

    // Hide the "No" button
    var noBtn = document.getElementById('noBtn');
    noBtn.style.display = 'none';
}
