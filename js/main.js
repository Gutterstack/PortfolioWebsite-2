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


(function() {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#email');
    let nameInput = document.querySelector('#name');

  

    function validateEmail() {
        let value = emailInput.value;
        let invalidInput = input.classList.add('input-invalid');
        if (!value) {
            return invalidInput;
        }
        if (value.indexOf('@') === -1) {
            return invalidInput;
        }
        // invalidInput(emailInput, null);
        else{ 
             return true;
        }
       
    }

    function validateName() {
        let value = nameInput.value;
        let invalidInput = input.classList.add('input-invalid');
        if (!value) {
            return invalidInput;
        }

        // invalidInput(nameInput, null);
        else{
            return true;
        }
    }
        
    

    function validateForm() {
        let isValidEmail = validateEmail();
        let isValidName = validateName();
        return isValidEmail && isValidName;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Succes!');
        }
    });

    emailInput.addEventListener('input', validateEmail);
    nameInput.addEventListener('input', validateName);
})();


   // if (value.length < 8) {
        //     return invalidInput;
        // }
