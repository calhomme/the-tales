gsap.registerPlugin(ScrollTrigger);

//LOADER
const fadingText = document.querySelector('.loading-container');
const removeOverlay = document.querySelector('.overlay');
const background = document.querySelector('.page-content');

setTimeout(function() {
    gsap.to('.loading-container', {opacity: 0, y: -100, duration: 0.75, ease: 'power1.out'});
}, 3500);

setTimeout(function() {
    //background.classList.add('stop-scrolling');
    removeOverlay.classList.add('fading');
}, 4000);


//PARALLAX
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * .7 + 'px)';
});

//BACK ON TOP AFTER RELOAD
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

//MOUSEMOVE EFFECT
let pointer = document.querySelector(".ball");

window.addEventListener("mousemove", cursor);

function cursor(e) {
    pointer.style.top = e.pageY + 'px';
    pointer.style.left = e.pageX + 'px';
}

//NAV ANIMATION
gsap.to(".nav-country", {
    x: innerWidth * 0.7,
    duration: 3,
    scrollTrigger: {
        trigger: ".nav-country",
        start: "top center",
    }
});

gsap.to(".nav-country2", {
    x: innerWidth * -0.7,
    duration: 3,
    scrollTrigger: {
        start: "top center",
        trigger: ".nav-country2",
    }
});

