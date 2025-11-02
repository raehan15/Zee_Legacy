# Images Folder

Place your product images in this folder.

## Naming Convention

For each product, you should have two images:

- Image 1: `productname-1.jpg` (or .png)
- Image 2: `productname-2.jpg` (or .png)

Example:

- `midnight-elegance-1.jpg`
- `midnight-elegance-2.jpg`
- `summer-breeze-1.jpg`
- `summer-breeze-2.jpg`

## Image Specifications

- **Aspect Ratio**: Mobile ratio (3:4 portrait orientation recommended)
- **Recommended Size**: 800x1067 pixels or similar portrait dimensions
- **Format**: JPG or PNG
- **File Size**: Keep under 500KB for optimal loading

## Adding Products

After adding images here, update the `js/products.js` file with your product information:

```javascript
products.push({
  id: 1,
  name: "Product Name",
  description: "Product description",
  price: "$99.99",
  images: ["images/productname-1.jpg", "images/productname-2.jpg"],
});
```
