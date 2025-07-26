let spacebarPressed = false;
let originalBackgroundColor;
let originalTextColor;
let originalFontFamily;

function updateCounter(action) {
    const disp = document.getElementById('count');
    var current = parseInt(disp.innerHTML);
    if (action === "increment") {
        disp.innerHTML = ++current;
    } else if (action === "decrement") {
        disp.innerHTML = --current;
    }
}

// Function to generate random dark color
function getRandomDarkColor() {
    const baseColor = parseInt('000000', 16); // A threshold dark color (darker than #333333)
    const randomColor = Math.floor(Math.random() * (16777215 - baseColor) + baseColor); // Random color between threshold and white
    return "#" + randomColor.toString(16); // Convert to hexadecimal format
}

// Function to generate random light color
function getRandomLightColor() {
    const letters = 'ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 6)];
    }
    return color;
}

// Function to generate random font family
function getRandomFontFamily() {
    const fontFamilies = [
        "Arial, sans-serif",
        "Verdana, sans-serif",
        "Georgia, serif",
        "Times New Roman, serif",
        "Courier New, monospace",
        "Comic Sans MS, cursive",
        "Impact, fantasy",
        "Helvetica, sans-serif",      // Add more font families here
        "Garamond, serif",
        "Palatino, serif",
        "Trebuchet MS, sans-serif",
        "Lucida Sans Unicode, sans-serif",
        "Tahoma, sans-serif",
        "Consolas, monospace"
        // Add as many fonts as you like
    ];
    return fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
}

// Store the original values when the page loads
window.onload = function() {
    const disp = document.getElementById('count');
    originalBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
    originalTextColor = window.getComputedStyle(disp).color;
    originalFontFamily = window.getComputedStyle(disp).fontFamily;
};

// Event listener for spacebar press
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 32 && !spacebarPressed) {
        spacebarPressed = true;
        const disp = document.getElementById('count');
        disp.classList.add('pulse');
        updateCounter("increment");
        document.body.style.backgroundColor = getRandomDarkColor();
        disp.style.color = getRandomLightColor();
        disp.style.fontFamily = getRandomFontFamily();
    }
});

// Event listener for spacebar release
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 32) {
        spacebarPressed = false;
        const disp = document.getElementById('count');
        disp.classList.remove('pulse');
    }
});

// Event listener for Enter key press
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        const disp = document.getElementById('count');
        disp.innerHTML = "0";
        disp.classList.add('bounce');
        setTimeout(() => {
            disp.classList.remove('bounce');
        }, 500);
        document.body.style.backgroundColor = originalBackgroundColor; // Restore original background color
        disp.style.color = originalTextColor; // Restore original text color
        disp.style.fontFamily = originalFontFamily; // Restore original font family
    }
});
