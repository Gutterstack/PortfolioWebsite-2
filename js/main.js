// Mobile Viewport

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// EventListener for resize event (user turns screen (lascape to portrait) or navigation move out of view on scroll)
window.addEventListener('resize', () => {
    //same code from above because we want the same result
 let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
});