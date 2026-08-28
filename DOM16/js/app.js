const form = document.getElementById("registerForm");
const message = document.getElementById("message");



// form submit

form.addEventListener("submit",function(event){
    event.preventDefault();

    // Get Value

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone =  document.getElementById("phone").value.trim();
    const country = document.getElementById("country").value;
    const password = document.getElementById("password").value;
    const confirmPassword =  document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms").checked;

    // Validation

    if(firstName ==="" || lastName ==="" || email === "" || phone ==="" ||
        country ==="" || password === "" || confirmPassword ===""
    ){
        showMessage(
            "Please Fill in all fields.",
            "red"
        );

        return;
    }

    // check password

    if(password !== confirmPassword){
         showMessage(
            "Password do not match.",
            "red"
        );

        return;
    }
    if(!terms){
         showMessage(
            "Please accept the terms & conditions.",
            "red"
        );
        return;
    }

})

function showMessage(text , color){
    message.textContent = text;
    message.style.color = color
}