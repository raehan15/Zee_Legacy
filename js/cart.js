// Cart Management System
class Cart {
  constructor() {
    this.items = this.loadFromStorage();
  }

  loadFromStorage() {
    const stored = localStorage.getItem("zee_legacy_cart");
    return stored ? JSON.parse(stored) : [];
  }

  saveToStorage() {
    localStorage.setItem("zee_legacy_cart", JSON.stringify(this.items));
  }

  addItem(product) {
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.images[0],
      });
    }

    this.saveToStorage();
    return existingItem ? "updated" : "added";
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.id !== productId);
    this.saveToStorage();
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find((item) => item.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(productId);
      } else {
        item.quantity = quantity;
        this.saveToStorage();
      }
    }
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.items.reduce((total, item) => {
      const priceValue = parseFloat(item.price.replace(/[^\d.-]/g, ""));
      return total + priceValue * item.quantity;
    }, 0);
  }

  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  clear() {
    this.items = [];
    this.saveToStorage();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Initialize global cart instance
const cart = new Cart();

// Update cart icon badge
function updateCartIcon() {
  const badge = document.getElementById("cart-count");
  const count = cart.getTotalItems();
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  }
}

// Format price for display
function formatPrice(price) {
  const value = parseFloat(price.replace(/[^\d.-]/g, ""));
  return "PKR " + value.toLocaleString("en-PK", { minimumFractionDigits: 0 });
}
