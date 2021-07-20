
//-------Declaring global variable
var firstname,
    lastname,
    clientemail,
    message;


//-------Animate navbar on scroll
window.addEventListener('scroll', function () {
    let element = document.getElementById("navbar");
    let element2 = document.getElementById("navbar-toggler");
    let scrollTop = this.scrollY > 0
    element.classList.toggle("scrolling-active", scrollTop);
    if (scrollTop > 0) {
        element2.style.backgroundColor = "white";
    }
    else {
        element2.style.backgroundColor = "transparent";
    }
})

//-------Displaying erros on invalid form submition
function setErrors(id, message, classIndex) {
    document.getElementsByClassName("error")[classIndex].innerHTML = message;
    return false;
}

//-------Validation for contact form
function validate() {
    
    firstname = document.getElementById("firstname");
    lastname = document.getElementById("lastname");
    clientemail = document.getElementById("clientemail");
    message = document.getElementById("messagearea");
    if (firstname.value == "" && lastname.value == "" && clientemail.value == "" && message.value == "") {
        for (var i = 0; i < 4; i++) {
            document.getElementsByClassName("fas")[i].style.display = "block";
        }
       
        return false;
    }
    else if (firstname.value == "") {
        return setErrors("firstname", "Please enter your first name", "0");
    }
    else if (firstname.value.length <= 3) {
        return setErrors("firstname", "First name should be greater than 3 characters", "0");
    }
    else if (lastname.value == "") {
        return setErrors("lastname", "please enter your last name", "1");
    }
    else if (lastname.value.length <= 3) {
        return setErrors("lastname", "Last name should be greater than 3 characters", "1");
    }
    else if (clientemail.value == "") {
        return setErrors("clientemail", "please enter your email address", "2");
    }
    else if (message.value == "") {
        return setErrors("messagearea", "please enter your message", "3");
    }
    else if (message.value.length <= 10) {
        return setErrors("message", "Message should be 10 characters long", "4");
    }
    else{
        return alert("Messeage sent successfully");
    }
}

//-------Clear errors one by one on keyup event
function clearErrors() {
    
    firstname = document.getElementById("firstname");
    lastname = document.getElementById("lastname");
    clientemail = document.getElementById("clientemail");
    message = document.getElementById("messagearea");
    if (firstname.value.length >= 3) {
       
        document.getElementsByClassName("error")[0].innerHTML = "";
        document.getElementsByClassName("fas")[0].style.display = "none";
    }
    if (lastname.value.length >= 3) {
        
        document.getElementsByClassName("error")[1].innerHTML = "";
        document.getElementsByClassName("fas")[1].style.display = "none";
    }
    if (clientemail.value.length >= 3) {
        
        document.getElementsByClassName("error")[2].innerHTML = "";
        document.getElementsByClassName("fas")[2].style.display = "none";
    }
    if (message.value.length >= 10) {
        
        document.getElementsByClassName("error")[3].innerHTML = "";
        document.getElementsByClassName("fas")[3].style.display = "none";
    }
}

