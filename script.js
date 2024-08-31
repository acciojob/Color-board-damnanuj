//your JS code here. If required.
const container = document.querySelector('.container');
const SQUARES = 800;
const colors = ['#ff4d4d', '#ff9d4d', '#ffff4d', '#4dff4d', '#4dffff', '#4d4dff', '#ff4dff' ];

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
}

function removeColor(element) {
    setTimeout(() => {
        element.style.backgroundColor = 'rgb(29, 29, 29)';
    }, 1000);
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
