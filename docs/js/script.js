  const products = [
      {
        id: 1,
        name: "لنت ترمز BMW X5",
        brand: "BMW",
        category: "لنت ترمز",
        price: "4,200,000",
        image: "../img/breakpad.png"
      },
      {
        id: 2,
        name: "فیلتر روغن Benz E-Class",
        brand: "Mercedes-Benz",
        category: "فیلتر",
        price: "1,800,000",
        image: "../img/oil-filter.png"
      },
      {
        id: 3,
        name: "تسمه موتور Audi A6",
        brand: "Audi",
        category: "تسمه موتور",
        price: "2,300,000",
        image: "../img/absorber.png"
      }
    ];

    const searchInput = document.getElementById('searchInput');
    const resultsDiv = document.getElementById('searchResults');

    // 🎯 رویداد جست‌وجو
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      resultsDiv.innerHTML = "";

      if (!query) return; // اگر چیزی تایپ نشده، خالی بمونه

      const filtered = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query)
      );

      if (filtered.length === 0) {
        resultsDiv.innerHTML = "<p>❌ قطعه‌ای یافت نشد.</p>";
        return;
      }

      filtered.forEach(item => {
        const result = document.createElement('div');
        result.classList.add('result-item');
        result.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <strong>${item.name}</strong><br>
          <small>${item.brand} | ${item.category}</small><br>
          <small style="color:#c0c0c0">${item.price} تومان</small>
        `;

        // 👇 رویداد کلیک برای انتقال به صفحه محصول
        result.addEventListener('click', () => {
          window.location.href = `index.html?id=${item.id}`;
        });

        resultsDiv.appendChild(result);
      });
    });



    // لیست عکس‌ها برای بک‌گراند
const backgrounds = [
  "../img/parts_car_back2.jpg",
  "../img/parts_car_back.jpg",
  "../img/parts_car_back4.jpg",
];

// ایندکس شروع
let index = 0;

// تابع تغییر پس‌زمینه
function changeBackground() {
  document.body.style.backgroundImage = `url(${backgrounds[index]})`;

  // بعدی رو آماده کن
  index = (index + 1) % backgrounds.length;
}

// اولین نمایش
changeBackground();

// هر 3 ثانیه بک‌گراند عوض شه
setInterval(changeBackground, 3000);



const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartPopup = document.getElementById("cart-popup");
const closeCart = document.getElementById("close-cart");
const cartIcon = document.querySelector(".cart-icon");

let cart = [];

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productCard = button.closest(".product-card");
    const title = productCard.querySelector("h3").innerText;
    const price = productCard.querySelector(".price").innerText;

    cart.push({ title, price });
    updateCartUI();
  });
});

function updateCartUI() {
  cartCount.innerText = cart.length;
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `${item.title} - ${item.price}`;
    cartItems.appendChild(li);
  });
}

cartIcon.addEventListener("click", () => {
  cartPopup.style.display = "block";
});

closeCart.addEventListener("click", () => {
  cartPopup.style.display = "none";
});


  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });

  