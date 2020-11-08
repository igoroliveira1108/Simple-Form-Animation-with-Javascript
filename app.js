function animatedForm (){
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => { // Attach a event listener for each arrow and check the info that the user typed on input
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement; // It will get the parent element of our const
            const nextForm = parent.nextElementSibling;

            // Check for validation
            if(input.type === 'text' && validateUser(input)){
                nextSlide(parent, nextForm);
            } else if (input.type === 'email' && validateEmail(input)){
                nextSlide(parent, nextForm);
            } else if(input.type === 'password' && validateUser(input)){
                nextSlide(parent, nextForm)
            } else {
                parent.style.animation = "shake 0.5s ease"
            }
            // Get rid of animation
            parent.addEventListener('animationend', () => {
                parent.style.animation = ''
            })
        });
    });
}

function validateUser(user) {
    if(user.value.length < 3 ){
        error('rgb(189,87,87'); // Red Color
    } else {
        error('rgb(87,189,130)'); // Green Color
        return true;
    }
}

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)){
        error('rgb(87,189,130)'); // Green Color
        return true;
    } else {
        error('rgb(189,87,87'); // Red Color
    }
}
    
function nextSlide(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove("active");
    nextForm.classList.add("active");
}

function error(color){
    document.body.style.backgroundColor = color
}


animatedForm();