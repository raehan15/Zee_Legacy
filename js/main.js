// Product image navigation state
const imageStates = {};

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  loadProducts();
  initSmoothScrolling();
  initScrollAnimations();
});

// Initialize scroll animations for intro text
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll(".fade-in-text");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute("data-delay") || 0;
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, delay * 500); // 500ms delay between each line
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  fadeElements.forEach((element) => {
    observer.observe(element);
  });
}

// Load and display products
function loadProducts() {
  const productsGrid = document.getElementById("productsGrid");

  if (products.length === 0) {
    productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #666;">
                <h3>No products available yet</h3>
                <p>Products will be added soon. Stay tuned!</p>
            </div>
        `;
    return;
  }

  productsGrid.innerHTML = "";

  products.forEach((product) => {
    const productCard = createProductCard(product);
    productsGrid.appendChild(productCard);
  });
}

// Create a product card element
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  // Initialize image state for this product
  imageStates[product.id] = { currentIndex: 0 };

  // Create image container with navigation
  const imageContainer = document.createElement("div");
  imageContainer.className = "product-image-container";

  // Add both images
  product.images.forEach((imageSrc, index) => {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = `${product.name} - Image ${index + 1}`;
    img.className = "product-image";
    if (index !== 0) {
      img.classList.add("hidden");
    }
    img.onerror = function () {
      this.src = `https://via.placeholder.com/400x533/667eea/ffffff?text=${encodeURIComponent(
        product.name
      )}`;
    };
    imageContainer.appendChild(img);
  });

  // Add navigation buttons
  const navButtons = document.createElement("div");
  navButtons.className = "image-nav-buttons";

  const prevBtn = document.createElement("button");
  prevBtn.className = "image-nav-btn prev-btn";
  prevBtn.innerHTML = "&#8249;";
  prevBtn.onclick = () => navigateImage(product.id, -1);
  prevBtn.disabled = true;

  const nextBtn = document.createElement("button");
  nextBtn.className = "image-nav-btn next-btn";
  nextBtn.innerHTML = "&#8250;";
  nextBtn.onclick = () => navigateImage(product.id, 1);
  if (product.images.length < 2) {
    nextBtn.disabled = true;
  }

  navButtons.appendChild(prevBtn);
  navButtons.appendChild(nextBtn);
  imageContainer.appendChild(navButtons);

  // Add image indicators
  if (product.images.length > 1) {
    const indicators = document.createElement("div");
    indicators.className = "image-indicators";
    indicators.id = `indicators-${product.id}`;

    product.images.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.className = `indicator-dot ${index === 0 ? "active" : ""}`;
      indicators.appendChild(dot);
    });

    imageContainer.appendChild(indicators);
  }

  card.appendChild(imageContainer);

  // Create product info section
  const productInfo = document.createElement("div");
  productInfo.className = "product-info";

  const productName = document.createElement("h3");
  productName.className = "product-name";
  productName.textContent = product.name;

  const productDescription = document.createElement("p");
  productDescription.className = "product-description";
  productDescription.textContent = product.description;

  const productPrice = document.createElement("div");
  productPrice.className = "product-price";
  productPrice.textContent = product.price;

  // Create WhatsApp button
  const whatsappBtn = document.createElement("a");
  whatsappBtn.className = "whatsapp-btn";
  whatsappBtn.href = createWhatsAppLink(product.name);
  whatsappBtn.target = "_blank";
  whatsappBtn.rel = "noopener noreferrer";
  whatsappBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    Order via WhatsApp
  `;

  productInfo.appendChild(productName);
  productInfo.appendChild(productDescription);
  productInfo.appendChild(productPrice);
  productInfo.appendChild(whatsappBtn);

  card.appendChild(productInfo);

  return card;
}

// Navigate between product images
function navigateImage(productId, direction) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const state = imageStates[productId];
  const newIndex = state.currentIndex + direction;

  // Check bounds
  if (newIndex < 0 || newIndex >= product.images.length) {
    return;
  }

  // Update state
  state.currentIndex = newIndex;

  // Update images visibility
  const card = event.target.closest(".product-card");
  const images = card.querySelectorAll(".product-image");
  images.forEach((img, index) => {
    if (index === newIndex) {
      img.classList.remove("hidden");
    } else {
      img.classList.add("hidden");
    }
  });

  // Update navigation buttons
  const prevBtn = card.querySelector(".prev-btn");
  const nextBtn = card.querySelector(".next-btn");

  prevBtn.disabled = newIndex === 0;
  nextBtn.disabled = newIndex === product.images.length - 1;

  // Update indicators
  const indicators = card.querySelectorAll(".indicator-dot");
  indicators.forEach((dot, index) => {
    if (index === newIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Create WhatsApp link with pre-populated message
function createWhatsAppLink(productName) {
  const phoneNumber = "923295460498"; // Format: country code + number (92 for Pakistan)
  const message = encodeURIComponent(
    `Assalam o Alaikum! 👋
Main aapki Zee Legacy website par perfumes dekh raha hoon. Mujhe apne liye ek perfume lena hai, ${productName}, thoda guide kar dein please — kaunsa best rahega aur order ka process kya hai?`
  );
  return `https://wa.me/${phoneNumber}?text=${message}`;
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}
