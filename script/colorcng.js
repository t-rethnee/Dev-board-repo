console.log("hero");
// Array of colors to cycle through
const colors = ['#ffdab9', '#e6e6fa', '#b2f0e8', '#fdd5c8', '#c3e8ff'];
let currentIndex = 0;

// Function to change background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentIndex++ % colors.length];
}

// Attach event listener to image icon
document.getElementById('color-change').addEventListener('click', changeBackgroundColor);

