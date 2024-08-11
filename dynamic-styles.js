function changeColor() {
    const box = document.getElementById('box');
    const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow', 'lightsalmon'];
    const currentColor = box.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];

    // Ensure the new color is different from the current color
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }

    box.style.backgroundColor = newColor;
}

function changeText() {
    const message = document.getElementById('message');
    message.textContent = "You clicked the button!";
    message.style.color = "red";
    message.style.fontSize = "20px";
}
