# Zee Legacy Perfumes - E-commerce Website

A simple, elegant e-commerce website for Zee Legacy Perfumes featuring product listings with dual-image navigation.

## Features

- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Product Grid**: Two products per row for optimal visibility
- **Image Navigation**: Each product displays two images with arrow navigation
- **Mobile-Optimized Images**: Portrait aspect ratio (3:4) for consistent display
- **Clean UI**: Modern, minimalist design focusing on products
- **No Payment Gateway**: Simple product showcase website

## Project Structure

```
Zee_Legacy/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
├── js/
│   ├── products.js     # Product data array
│   └── main.js         # Main JavaScript functionality
├── images/             # Product images folder
│   └── README.md       # Image guidelines
└── README.md           # This file
```

## How to Use

### 1. Add Product Images

Place your product images in the `images/` folder with the naming convention:

- `productname-1.jpg` (first image)
- `productname-2.jpg` (second image)

Example:

- `midnight-elegance-1.jpg`
- `midnight-elegance-2.jpg`

### 2. Add Product Information

Open `js/products.js` and add your products:

```javascript
products.push({
  id: 1,
  name: "Midnight Elegance",
  description: "A sophisticated blend of woody and floral notes",
  price: "$89.99",
  images: ["images/midnight-elegance-1.jpg", "images/midnight-elegance-2.jpg"],
});
```

### 3. Customize Logo

Replace the logo placeholder in the navbar by either:

- Adding a logo image file to the images folder
- Updating the `.logo-placeholder` section in `index.html`

### 4. Update Contact Information

Edit the contact section in `index.html` with your actual:

- Email address
- Phone number
- Social media links (optional)

## Running the Website

Simply open `index.html` in any modern web browser. No server or build process required!

For development, you can use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Customization

### Colors

Edit `css/styles.css` to change the color scheme:

- Primary gradient: `#667eea` to `#764ba2`
- Dark background: `#1a1a1a`
- Text color: `#333`

### Layout

- Products per row: Modify `.products-grid` in CSS
- Image aspect ratio: Adjust `padding-top` in `.product-image-container`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Future Enhancements

- Shopping cart functionality
- Product detail pages
- Search and filter options
- Payment gateway integration
- Customer reviews
- Wishlist feature

## License

Copyright © 2025 Zee Legacy Perfumes. All rights reserved.
