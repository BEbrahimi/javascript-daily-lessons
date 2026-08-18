const button = document.getElementById("darkModeBtn");

const body = document.body;


button.addEventListener("click", function () {

    // Add or remove dark class
    body.classList.toggle("dark");


    // Check current mode
    if (body.classList.contains("dark")) {

        button.textContent = "☀️ Light Mode";

    } else {

        button.textContent = "🌙 Dark Mode";

    }

});