function validate () {  
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const errorElement = document.getElementById("error");
    const passRegex = /^[A-Za-z]\w{8,14}$/;

    errorElement.style.padding = "5px"                     //add padding to error element if error triggered

    if (email.value == "" || password.value == "") {       //check error conditions
        errorElement.innerHTML = "! -- No blanks allowed"
        return false;
    }

    if (email.value.indexOf("@") == -1) {
        errorElement.innerHTML = "! -- Please enter a valid email"
        return false;
    }

    if (password.value.length < 8) {
        errorElement.innerHTML = "Password should be minimum 8 characters"
        return false;
    }

    if (password.value.match(passRegex)) {
        errorElement.innerHTML = "Password should be alphanumeric, starts with a letter, and within 8~14 characters"
        return false;
    }

    else { 
        return true;
    }
}


    //     const form = document.getElementById("form"); 
    // form.addEventListener('submit', (e) => {         //alternative
    //     let messages = [];                          // declare the message to show if error occured     
        
    //     if (email.value == "" || password.value == "") {
    //         messages.push("Blanks are not allowed");
    //     }
            
    //     if (email.value.indexOf("@") == -1) {
    //         messages.push("Please enter a valid email");
    //     }

    //     if (password.value.length < 8) {
    //         messages.push("Password should be minimum 8 characters");
    //     }

    //     if (password.value === "password") {
    //         messages.push('Password cannot be "password"');
    //     }
                
    //     if (password.value.match(passRegex)) {
    //         messages.push("Password should be alphanumeric, starts with a letter, and within 7~16 characters");
    //     }

    //     e.preventDefault();                        //prevent the page from submitting
    //     errorElement.textContent = messages.join(',')
        
    //     else {
    //         return true;
    //     }
    // })
