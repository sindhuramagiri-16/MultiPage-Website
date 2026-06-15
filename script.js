const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const message =
    document.getElementById("message").value.trim();

    if(name === ""){
        alert("Please enter your name");
        event.preventDefault();
        return;
    }

    if(email === ""){
        alert("Please enter your email");
        event.preventDefault();
        return;
    }

    if(message === ""){
        alert("Please enter your message");
        event.preventDefault();
        return;
    }

    alert("Form submitted successfully!");

});