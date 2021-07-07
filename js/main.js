// // Mobile Viewport

// // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
// let vh = window.innerHeight * 0.01;
// // Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// // EventListener for resize event (user turns screen (lascape to portrait) or navigation move out of view on scroll)
// window.addEventListener('resize', () => {
//     //same code from above because we want the same result
//  let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);
// });


// select the open-btn button
let openBtn = document.getElementById('open-btn');
// select the modal-background
let modalBackground = document.getElementById('modal-background');
// select the close-btn 
let closeBtn = document.getElementById('close-btn');

// shows the modal when the user clicks open-btn
openBtn.addEventListener('click', function () {
    modalBackground.style.display = 'block';
});

// hides the modal when the user clicks close-btn
closeBtn.addEventListener('click', function () {
    modalBackground.style.display = 'none';
});

// hides the modal when the user clicks outside the modal
window.addEventListener('click', function (event) {
    // check if the event happened on the modal-background
    if (event.target === modalBackground) {
        // hides the modal
        modalBackground.style.display = 'none';
    }
});

