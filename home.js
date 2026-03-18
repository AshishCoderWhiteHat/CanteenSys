const menuItems = [
  { name: "Veg Thali",       emoji: "🍱", desc: "Rice, dal, sabzi, roti & pickle",  price: 60,  tag: "Best Value" },
  { name: "Masala Maggi",    emoji: "🍜", desc: "Spicy noodles with veggies",        price: 30,  tag: "Popular" },
  { name: "Samosa (2 pcs)",  emoji: "🥟", desc: "Crispy, hot with green chutney",    price: 20,  tag: "Snack" },
  { name: "Cold Coffee",     emoji: "☕", desc: "Chilled blended coffee with milk",  price: 40,  tag: "Drink" },
  { name: "Paneer Sandwich", emoji: "🥪", desc: "Grilled with mint chutney",         price: 45,  tag: "Popular" },
  { name: "Masala Chai",     emoji: "🍵", desc: "Strong ginger-cardamom tea",        price: 15,  tag: "Drink" },
  { name: "Veg Burger",      emoji: "🍔", desc: "Aloo tikki patty with coleslaw",    price: 50,  tag: "Snack" },
  { name: "Fresh Lime Soda", emoji: "🥤", desc: "Sweet or salted, always refreshing",price: 25,  tag: "Drink" },
];

let cartCount = 0;

function renderMenu() {
  const grid = document.getElementById("menuGrid");
  grid.innerHTML = menuItems.map((item, i) => `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="card menu-card h-100">
        <div class="card-emoji">${item.emoji}</div>
        <div class="card-body d-flex flex-column">
          <span class="badge bg-warning text-dark mb-1" style="width:fit-content;font-size:0.7rem;">${item.tag}</span>
          <h6 class="card-title">${item.name}</h6>
          <p class="card-text flex-grow-1">${item.desc}</p>
          <div class="d-flex justify-content-between align-items-center mt-2">
            <span class="price-tag">₹${item.price}</span>
            <button class="btn-add" onclick="addToCart('${item.name}')">
              <i class="bi bi-plus-lg me-1"></i>Add
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function addToCart(name) {
  cartCount++;
  document.getElementById("cartCount").textContent = cartCount;
  document.getElementById("toastMsg").textContent = `"${name}" added to cart!`;
  const toast = new bootstrap.Toast(document.getElementById("cartToast"), { delay: 2000 });
  toast.show();
}

// Contact form submit
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const btn = this.querySelector("button[type=submit]");
  btn.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Message Sent!';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = '<i class="bi bi-send-fill me-2"></i>Send Message';
    btn.disabled = false;
    this.reset();
  }, 3000);
});

// Smooth active nav highlight on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 80) current = sec.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
  });
});

renderMenu();

