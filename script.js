document.addEventListener("DOMContentLoaded", function() {
    const shapeElement = document.getElementById("shape");
    const changeColorButton = document.getElementById("changeColor");
    const changeShapeButton = document.getElementById("changeShape");

    const colors = ["#3498db", "#e74c3c", "#f1c40f", "#2ecc71", "#9b59b6", "#1abc9c", "#e67e22", "#34495e", "#d35400", "#7f8c8d"];
    const shapes = ["square", "circle", "rectangle", "triangle", "diamond"];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    changeColorButton.addEventListener("click", function() {
        const randomColor = colors[getRandomInt(colors.length)];
        shapeElement.style.backgroundColor = randomColor;
        if (shapeElement.classList.contains('triangle') || shapeElement.classList.contains('diamond')) {
            shapeElement.querySelector('.inner-shape').style.borderBottomColor = randomColor;
        }
    });

    changeShapeButton.addEventListener("click", function() {
        const randomShape = shapes[getRandomInt(shapes.length)];
        shapeElement.className = `shape ${randomShape}`;

        if (randomShape === "triangle") {
            shapeElement.style.backgroundColor = "transparent";
            shapeElement.innerHTML = '<div class="inner-shape"></div>';
        } else if (randomShape === "diamond") {
            shapeElement.style.backgroundColor = "transparent";
            shapeElement.innerHTML = '<div class="inner-shape"></div>';
        } else {
            shapeElement.style.backgroundColor = colors[getRandomInt(colors.length)];
            shapeElement.innerHTML = '';
        }
    });
});
