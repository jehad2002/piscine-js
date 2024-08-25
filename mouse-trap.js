let box;
let circle;
let flag = true;
let x, y;

export function createCircle() {
    addEventListener("click", function () {
        circle = document.createElement("div");
        circle.className = "circle";
        circle.style.left = x;
        circle.style.top = y;

        if (flag) {
            circle.style.background = "white";
        } else {
            circle.style.background = 'var(--purple)';
        }

        document.body.appendChild(circle);
        flag = true;
    });
}

export function moveCircle() {
    addEventListener("mousemove", e => {
        document.querySelectorAll(".circleRem").forEach((elem) => {
            elem.remove();
        });

        x = e.clientX - 25 + "px";
        y = e.clientY - 25 + "px";
        let circlePreview = document.createElement("div");
        circlePreview.className = "circle";
        circlePreview.classList.add("circleRem");
        circlePreview.style.left = x;
        circlePreview.style.top = y;

        const boxRect = box.getBoundingClientRect();
        const circleRadius = 25;

        const insideX = e.clientX > boxRect.left + circleRadius && e.clientX < boxRect.right - circleRadius;
        const insideY = e.clientY > boxRect.top + circleRadius && e.clientY < boxRect.bottom - circleRadius;
        const isInside = insideX && insideY;

        if (isInside) {
            circlePreview.style.background = 'var(--purple)';
            flag = false;
        } else {
            circlePreview.style.background = "white";
        }

        if (!flag) {
            if (e.clientX - circleRadius < boxRect.left) {
                circlePreview.style.left = boxRect.left + "px";
            }
            if (e.clientX + circleRadius > boxRect.right) {
                circlePreview.style.left = boxRect.right - 50 + "px";
            }
            if (e.clientY - circleRadius < boxRect.top) {
                circlePreview.style.top = boxRect.top + "px";
            }
            if (e.clientY + circleRadius > boxRect.bottom) {
                circlePreview.style.top = boxRect.bottom - 50 + "px";
            }
        }

        document.body.appendChild(circlePreview);
    });
}

export function setBox() {
    box = document.createElement("div");
    box.className = "box";
    document.body.appendChild(box);
}
