const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const strengthProgress = document.getElementById("strengthProgress");
const passwordMessage = document.getElementById("passwordMessage");
const confirmMessage = document.getElementById("confirmMessage");
const successMessage = document.getElementById("successMessage");
const form = document.getElementById("registerForm");

nameInput.addEventListener("input",()=>{
    if(nameInput.value.trim() !== ""){
        nameInput.classList.add("valid");
        nameInput.classList.remove("invalid")
    }else{
        nameInput.classList.remove("valid")
    }
});


emailInput.addEventListener("input",()=>{
    if(
        emailInput.value.includes("@") &&
        emailInput.value.includes(".") 
    ){
        emailInput.classList.add("valid");
        emailInput.classList.remove("invalid")
    }else{
        emailInput.classList.remove("valid")
    }
});

passwordInput.addEventListener("input", ()=>{
    const password = passwordInput.value;

    const hasNumber = /[0-9]/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasSymbol = /[^a-zA-Z0-9]/.test(password);

    if(password.length === 0){
        strengthProgress.style.width = "0%";
        passwordMessage.textContent="";
        passwordInput.classList.remove("valid","invalid");
    }


})