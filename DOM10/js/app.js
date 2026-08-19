const products = [
    {
        id: 1,
        name: "Dell Inspiron 15",
        category: "Laptop",
        price: 650,
        oldPrice: 750,
        discount: 13,
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=600&q=80",
        description: "Powerful laptop for work and study."
    },

    {
        id: 2,
        name: "MacBook Air M2",
        category: "Laptop",
        price: 999,
        oldPrice: 1199,
        discount: 17,
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=600&q=80",
        description: "Lightweight laptop with Apple M2 chip."
    },

    {
        id: 3,
        name: "HP Pavilion 14",
        category: "Laptop",
        price: 720,
        oldPrice: 850,
        discount: 15,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
        description: "Modern laptop for everyday productivity."
    },

    {
        id: 4,
        name: "Samsung Galaxy S24",
        category: "Smartphone",
        price: 799,
        oldPrice: 899,
        discount: 11,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
        description: "Premium Android smartphone."
    },

    {
        id: 5,
        name: "iPhone 15 Pro",
        category: "Smartphone",
        price: 999,
        oldPrice: 1099,
        discount: 9,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80",
        description: "Powerful smartphone with advanced camera."
    },

    {
        id: 6,
        name: "Google Pixel 8",
        category: "Smartphone",
        price: 699,
        oldPrice: 799,
        discount: 13,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
        description: "Smartphone with excellent camera."
    },

    {
        id: 7,
        name: "Sony WH-1000XM5",
        category: "Headphone",
        price: 349,
        oldPrice: 399,
        discount: 13,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
        description: "Premium wireless noise cancelling headphones."
    },

    {
        id: 8,
        name: "AirPods Pro",
        category: "Headphone",
        price: 249,
        oldPrice: 299,
        discount: 17,
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80",
        description: "Wireless earbuds with active noise cancellation."
    },

    {
        id: 9,
        name: "JBL Wireless Headphones",
        category: "Headphone",
        price: 129,
        oldPrice: 159,
        discount: 19,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80",
        description: "Comfortable wireless headphones."
    },

    {
        id: 10,
        name: "Wireless Mouse",
        category: "Accessories",
        price: 29,
        oldPrice: 39,
        discount: 26,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80",
        description: "Ergonomic wireless mouse."
    },

    {
        id: 11,
        name: "Mechanical Keyboard",
        category: "Accessories",
        price: 79,
        oldPrice: 99,
        discount: 20,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
        description: "RGB mechanical gaming keyboard."
    },

    {
        id: 12,
        name: "USB-C Hub",
        category: "Accessories",
        price: 39,
        oldPrice: 49,
        discount: 20,
        image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=600&q=80",
        description: "Multi-port USB-C adapter."
    },
    {
        id: 13,
        name: "Samsung Galaxy S24",
        category: "Smartphone",
        price: 799,
        oldPrice: 899,
        discount: 11,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
        description: "Premium Android smartphone."
    },
];

const productsContainer = document.getElementById("productsContainer");

const searchInput = document.getElementById("searchInput");

const searchButton = document.getElementById("searchButton");

const noResult = document.getElementById("noResult");

const resultCount = document.getElementById("resultCount");

const categoryButtons = document.querySelectorAll(".category-btn");

const cartPanel = document.getElementById("cartPanel");

const cartButton = document.getElementById("cartButton");

const closeCart =
    document.getElementById("closeCart");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const checkoutButton =
    document.getElementById("checkoutButton");


let selectedCategory = "All";

let cart = [];

function displayProducts(productList) {

    productsContainer.innerHTML = "";

    if (productList.length === 0) {
        productsContainer.appendChild(noResult);
        noResult.style.display = "block";
        resultCount.textContent = "0 products found";

        return;
    }

    noResult.style.display = "none";


    productList.forEach(function (product) {
        const productCard = document.createElement("div");

        productCard.classList.add("product-card");

        productCard.innerHTML = `
        
        <span class="discount">
        ${product.discount}% OFF
        </span>
        
        <img
            class ="product-image"
            src="${product.image}"
            alt = "${product.name}"
        />

        <div class="product-info">

                    <div class="product-category">
                        ${product.category}
                    </div>

                    <h3 class="product-name">
                        ${product.name}
                    </h3>

                    <p class="product-description">
                        ${product.description}
                    </p>

                    <div class="price">

                        <span class="new-price">
                            $${product.price}
                        </span>

                        <span class="old-price">
                            $${product.oldPrice}
                        </span>

                    </div>

                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})"
                    >
                        🛒 Add to Cart
                    </button>

                </div>
        `;

        productsContainer.appendChild(productCard);

    });

    resultCount.textContent=`${productList.length} product(s) found`;

}

function searchProducts(){

    const searchText = searchInput.value.toLowerCase().trim();

    const filteredProducts = products.filter(function(product){
        const matchesSearch = product.name.toLowerCase().includes(searchText);
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    displayProducts(filteredProducts)
}

searchInput.addEventListener("input", function(event){
    console.log("Input value:", event.target.value);
    searchProducts();
})









displayProducts(products);