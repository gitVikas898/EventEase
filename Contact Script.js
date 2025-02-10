document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    const errors = validateForm(name,email,message);

    if(Object.keys(errors).length>0){
        if (errors.name) document.getElementById("name-error").textContent = errors.name;
        if (errors.email) document.getElementById("email-error").textContent = errors.email;
        if (errors.message) document.getElementById("message-error").textContent = errors.message;
        return;
    }

    document.getElementById("successMessage").classList.remove("hidden");
    this.reset();
});

function validateForm(name,email,message){
    const error = {}
    const nameValue = /^[A-Za-z\s]+$/.test(name)
    const emailValue = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const messageValue = /^.{1,500}$/.test(message);

    if(!nameValue){
        error.name = "Enter a valid name (only letters & spaces allowed)";
    }
    if(!emailValue){
        error.email =  "Enter a valid email address";
    }

    if(!messageValue){
        error.message =  "Message must be between 1 and 500 characters";

    return error;
}
}