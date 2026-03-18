// Load cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// 🔢 Update Navbar Cart Count
function updateCartCount() {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelectorAll("#cart-count").forEach(el => {
        el.innerText = cartData.length;
    });
}

// 🛒 Display Cart
function displayCart() {
    let container = document.getElementById("cart-items");
    container.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.qty;

        container.innerHTML += `
        <div class="card p-3 mb-3 shadow">
            <h5>${item.name}</h5>
            <p>Price: ₹${item.price}</p>

            <div class="d-flex align-items-center gap-2">
                <button class="btn btn-sm btn-secondary" onclick="changeQty(${index}, -1)">-</button>
                <span>${item.qty}</span>
                <button class="btn btn-sm btn-secondary" onclick="changeQty(${index}, 1)">+</button>
            </div>

            <button class="btn btn-danger mt-2" onclick="removeItem(${index})">
                Remove
            </button>
        </div>
        `;
    });

    document.getElementById("total").innerText = total;
}

// ➕➖ Quantity Change
function changeQty(index, change) {
    cart[index].qty += change;

    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

// ❌ Remove
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

// 🗑 Clear Cart
function clearCart() {
    localStorage.removeItem("cart");
    cart = [];
    displayCart();
    updateCartCount();
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

// 🌙 Load Theme
function loadTheme() {
    let theme = localStorage.getItem("theme");

    if (theme === "dark") {
        document.body.classList.add("dark");
    }
}

// Run on load
displayCart();
updateCartCount();
loadTheme();