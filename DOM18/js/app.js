const productName = document.getElementById("productName");

const productPrice = document.getElementById("productPrice");

const productImage = document.getElementById("productImage");

const addProduct = document.getElementById("addProduct");

const products = document.getElementById("products");

addProduct.addEventListener("click", function(){

    if(
        productName.value === "" ||
        productPrice.value === "" ||
        productImage.value === "" 
    )
    {
        alert("Please fill all fields.");
        return;
    }


    const card = document.createElement("div");
    card.className ="card";

    card.innerHTML = `
        <img src="images/${productImage.value}">
        <h3>
            ${productName.value}
        </h3> 
        
        <p>
           $ ${productPrice.value}
        </p>

        <button class="delete">
            Delete
        </button>
    `;

    products.appendChild(card);


    card.querySelector(".delete")
    .addEventListener("click",function(){
        card.remove();
    });

    productImage.value= "";
    productName.value = "";
    productPrice.value="";
});


