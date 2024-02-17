let growthFactor = 1.2;

function showMessage(message) {
    document.getElementById('message').innerText = message;
}

function growButton() {
    var yesBtn = document.getElementById('yesBtn');
    yesBtn.style.transform = `scale(${growthFactor})`;
    growthFactor += 0.2;
}

function hideNoButton() {
    var noBtn = document.getElementById('noBtn');
    noBtn.style.display = 'none';
}

function startFlowerRain() {
    var flowerRain = document.getElementById('flowerRain');
    
    // Remove previous flowers (if any)
    while (flowerRain.firstChild) {
        flowerRain.removeChild(flowerRain.firstChild);
    }

    // Create and append new flowers
    for (let i = 0; i < 50; i++) {
        var flower = document.createElement('span');
        flower.innerHTML = '🌸'; // Flower emoji
        flower.className = 'flower';
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = Math.random() * 2 + 1 + 's';
        flowerRain.appendChild(flower);
    }
}
