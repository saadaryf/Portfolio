
function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    const threshold = 1;

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
            line.style.opacity = '1';
        } else {
            line.style.opacity = '0';
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
        } else {
            fadeEl.style.opacity = 0;
        }
    })
}

document.addEventListener('DOMContentLoaded', showElementsOnScroll);
window.addEventListener('scroll', showElementsOnScroll);



// following green blured bubble

document.addEventListener("DOMContentLoaded", function () {
    const bubble = document.querySelector(".green-bubble");

    document.addEventListener("mousemove", function (e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        bubble.style.left = (mouseX - 300) + "px";
        bubble.style.top = (mouseY - 230) + "px";
    });
});


// scroll
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - ($(window).height() - target.outerHeight()) / 2
            }, 1000);
        }
    });
});
