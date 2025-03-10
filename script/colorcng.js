console.log("hero");
// Array of colors to cycle through
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33E3'];
let currentIndex = 0;

// Function to change background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentIndex++ % colors.length];
}

// Attach event listener to image icon
document.getElementById('color-change').addEventListener('click', changeBackgroundColor);

