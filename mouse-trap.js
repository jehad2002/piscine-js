let box;
let flag = true;
let x;
let y;
let circle;

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

        if (flag) {
            circlePreview.style.background = "white";
        } else {
            circlePreview.style.background = 'var(--purple)';
        }

        document.body.appendChild(circlePreview);

        const inBox = (e.clientX >= box.getBoundingClientRect().left + 25 &&
                       e.clientX <= box.getBoundingClientRect().right - 25 &&
                       e.clientY >= box.getBoundingClientRect().top + 25 &&
                       e.clientY <= box.getBoundingClientRect().bottom - 25);
        
        if (inBox) {
            document.querySelector(".circleRem").style.background = 'var(--purple)';
            flag = false;
        }

        if (!flag) {
            if (e.clientX - 25 < box.getBoundingClientRect().left) {
                circlePreview.style.left = box.getBoundingClientRect().left + "px";
            }
            if (e.clientX + 25 > box.getBoundingClientRect().right) {
                circlePreview.style.left = box.getBoundingClientRect().right - 50 + "px";
            }
            if (e.clientY - 25 < box.getBoundingClientRect().top) {
                circlePreview.style.top = box.getBoundingClientRect().top + "px";
            }
            if (e.clientY + 25 > box.getBoundingClientRect().bottom) {
                circlePreview.style.top = box.getBoundingClientRect().bottom - 50 + "px";
            }
        }
    });
}

export function setBox() {
    box = document.createElement("div");
    box.className = "box";
    document.body.appendChild(box);
    console.log(box.getBoundingClientRect().bottom);
}
