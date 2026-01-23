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
  const galleryTrack = document.getElementById("productsGallery");

  if (!galleryTrack) return; // Guard clause if we are not on the shop page

  if (products.length === 0) {
    galleryTrack.innerHTML = `
            <div style="width: 100vw; display: flex; justify-content: center; align-items: center;">
                <h3>No products available yet</h3>
            </div>
        `;
    return;
  }

  galleryTrack.innerHTML = products
    .map(
      (product, index) => `
        <div class="product-panel">
            <div class="product-content">
                <div class="product-image-container">
                    <img src="${product.images[0]}" alt="${
        product.name
      }" class="product-image">
                </div>
                <div class="product-info">
                    <div style="position: relative;">
                        <span class="product-number">0${index + 1}</span>
                        <h2 class="product-title">${product.name}</h2>
                    </div>
                    <p class="product-desc">${product.description}</p>
                    <span class="product-price">${product.price}</span>
                    <div style="display: flex; flex-direction: column; gap: 15px;">
                        <a href="${createWhatsAppLink(
                          product.name
                        )}" target="_blank" class="buy-btn">Order via WhatsApp</a>
                        <button onclick="addToCart(${
                          product.id
                        })" class="buy-btn" style="background: #d4af37; color: #fff; border: none; cursor: pointer;">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    `
    )
    .join("");

  // Initialize GSAP Vertical Animations after content is loaded
  initVerticalAnimations();
}

function initVerticalAnimations() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger not loaded");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const panels = gsap.utils.toArray(".product-panel");

  panels.forEach((panel, i) => {
    // Animate content fading in and moving up
    gsap.from(panel.querySelector(".product-content"), {
      autoAlpha: 0,
      y: 100,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: panel,
        start: "top 75%", // Start animation when top of panel hits 75% of viewport height
        end: "top 25%",
        toggleActions: "play none none reverse",
      },
    });
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

// Add to Cart function
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    const status = cart.addItem(product);
    updateCartIcon();

    // Show a visual feedback
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent =
      status === "added" ? "Added to Cart! ✓" : "Quantity Updated! ✓";
    btn.style.background = "#4caf50";

    setTimeout(() => {
      btn.textContent = "Add to Cart";
      btn.style.background = "#d4af37";
    }, 2000);
  }
}
