// const menu = document.getElementById('menu');
const button = document.getElementById('button');
let menuOpen = false;


// function disableScroll() {
//     // Get the current page scroll position
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

//         // if any scroll is attempted, set this to the previous value
//         window.onscroll = function() {
//             window.scrollTo(scrollLeft, scrollTop);
//         };
// }

// function enableScroll() {
//     window.onscroll = function() {};
// }

button.addEventListener('click', () => {
    if (!menuOpen) {
        button.classList.add('open');
        menuOpen = true;
        // menu.style.transform = 'translateX(0%)';
        disableScroll();
    } else {
        button.classList.remove('open');
        menuOpen = false;
        // menu.style.transform = 'translateX(-100%)'
        enableScroll();
    }
})