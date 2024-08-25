let box;
let flag = true;
let x, y;
let circle;

export function createCircle() {
    document.addEventListener("click", function (e) {
        circle = document.createElement("div");
        circle.className = "circle";
        x = e.clientX - 25 + "px";
        y = e.clientY - 25 + "px";
        circle.style.left = x;
        circle.style.top = y;
        circle.style.background = "white";
        document.body.appendChild(circle);
        flag = true;
    });
}

export function moveCircle() {
    document.addEventListener("mousemove", function (e) {
        if (!circle) return; // Prevent errors if no circle is created yet
        x = e.clientX - 25 + "px";
        y = e.clientY - 25 + "px";
        circle.style.left = x;
        circle.style.top = y;

        const circleRect = circle.getBoundingClientRect();
        const boxRect = box.getBoundingClientRect();

        // Check if the circle is entirely inside the box
        const insideX = circleRect.left >= boxRect.left + 1 && circleRect.right <= boxRect.right - 1;
        const insideY = circleRect.top >= boxRect.top + 1 && circleRect.bottom <= boxRect.bottom - 1;
        const isInside = insideX && insideY;

        if (isInside) {
            circle.style.background = 'var(--purple)';
            flag = false;
        }

        if (!flag) {
            // Prevent the circle from leaving the box
            if (circleRect.left < boxRect.left + 1) {
                circle.style.left = boxRect.left + 1 + "px";
            }
            if (circleRect.right > boxRect.right - 1) {
                circle.style.left = boxRect.right - circleRect.width - 1 + "px";
            }
            if (circleRect.top < boxRect.top + 1) {
                circle.style.top = boxRect.top + 1 + "px";
            }
            if (circleRect.bottom > boxRect.bottom - 1) {
                circle.style.top = boxRect.bottom - circleRect.height - 1 + "px";
            }
        }
    });
}

export function setBox() {
    box = document.createElement("div");
    box.className = "box";
    document.body.appendChild(box);
}
