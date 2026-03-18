// Load cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// 🛒 Add to Cart
function addToCart(name, price) {
    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ name, price, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// 🔢 Update Cart Count (Navbar + Page)
function updateCartCount() {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelectorAll("#cart-count").forEach(el => {
        el.innerText = cartData.length;
    });
}

// 🌙 Theme Toggle + Save
function toggleTheme() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// 🌙 Apply saved theme on load
function loadTheme() {
    let theme = localStorage.getItem("theme");

    if (theme === "dark") {
        document.body.classList.add("dark");
    }
}

// 🔍 Search
function searchFood() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".card-item");

    cards.forEach(card => {
        let name = card.querySelector("h5").innerText.toLowerCase();
        card.style.display = name.includes(input) ? "block" : "none";
    });
}

// 🍽 Filter
function filterItems(category) {
    let cards = document.querySelectorAll(".card-item");

    cards.forEach(card => {
        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Run on load
updateCartCount();
loadTheme();