
function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    const threshold = 0.8;

    return (
        rect.bottom >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * threshold
    );
}


function showElementsOnScroll() {
    const lines = document.querySelectorAll('.line');
    const icons = document.querySelectorAll('.icon');
    const fadingElements = document.querySelectorAll('.fade-it');

    lines.forEach((line) => {
        if (isElementInView(line)) {
            line.style.opacity = 1;
        } else {
            line.style.opacity = 0;
        }
    })
    icons.forEach((icon) => {
        if (isElementInView(icon)) {
            icon.style.opacity = 1;
        } else {
            icon.style.opacity = 0;
        }
    })
    fadingElements.forEach((fadeEl) => {
        if (isElementInView(fadeEl)) {
            fadeEl.style.opacity = 1;
            fadeEl.style.pointerEvents = 'auto';
        } else {
            fadeEl.style.opacity = 0;
            fadeEl.style.pointerEvents = 'none';
        }
    });
    
}

document.addEventListener('DOMContentLoaded', showElementsOnScroll);
window.addEventListener('scroll', showElementsOnScroll);



// following green blured bubble

document.addEventListener("DOMContentLoaded", function () {
    const bubbles = document.querySelectorAll(".green-bubble");

    document.addEventListener("mousemove", function (e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        bubbles.forEach((bubble)=>{
            bubble.style.left = (mouseX - 300) + "px";
            bubble.style.top = (mouseY - 230) + "px";
        })

    });
});


// down arrow
const downArrow = document.querySelector(".down-arrow");

document.addEventListener("scroll", function(){
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 50) {
        downArrow.style.display = 'none';
    } else {
        downArrow.style.display = 'block';
    }
});
