// Product data array
// Add your products here with the format below
const products = [
  {
    id: 1,
    name: "Gucci Flora",
    description:
      "A Floral Fruity Fragrance for Women. Featuring Peony, Mandarin Orange, and Citrus top notes, with Rose, Osmanthus, and Magnolia in the heart, finishing with Sandalwood, Patchouli, and Musk. One of our best-selling feminine fragrances for elegance and charm.",
    price: "PKR 1,300",
    images: ["images/gucci_flora_1.jpeg", "images/gucci_flora_2.jpeg"],
  },
  {
    id: 2,
    name: "Creed Aventus",
    description:
      "A Chypre Fruity Fragrance for Men. Top notes of Pineapple, Bergamot, Black Currant, Apple, Lemon, and Pink Pepper. Middle notes of Pineapple, Patchouli, Jasmine, and Rose. Base notes include Birch, Oak Moss, Musk, Ambergris, and Vanilla. One of our signature masculine fragrances — bold, refined, and perfect for men who want to leave a powerful impression.",
    price: "PKR 1,650",
    images: ["images/creed_aventus_1.jpeg", "images/creed_aventus_2.jpeg"],
  },
  {
    id: 3,
    name: "CK One",
    description:
      "A Citrus Aromatic Unisex Fragrance. Top notes of Lemon, Green Notes, Bergamot, Mandarin Orange, Pineapple, Cardamom, and Papaya. Middle notes of Lily-of-the-Valley, Jasmine, Violet, Nutmeg, Rose, Orris Root, and Freesia. Base notes include Green Accord, Musk, Cedarwood, Sandalwood, Oakmoss, Green Tea, and Amber. One of our most versatile and popular fragrances, perfect for anyone looking for something fresh, clean, and universally appealing.",
    price: "PKR 1,300",
    images: ["images/ck_one_1.jpeg", "images/ck_one_2.jpeg"],
  },
  {
    id: 4,
    name: "Bleu de Chanel",
    description:
      "A Woody Aromatic Fragrance for Men. Top notes of Grapefruit, Lemon, Mint, Pink Pepper, Bergamot, and subtle Aldehydes & Coriander. Middle notes of Ginger, Nutmeg, Jasmine, Iso E Super, and Melon. Base notes include Incense, Vetiver, Cedar, Sandalwood, Patchouli, Labdanum, and White Musk. One of our most elegant masculine fragrances, crafted for men who seek a bold yet sophisticated scent.",
    price: "PKR 1,300",
    images: ["images/bleu_chanel_1.jpeg", "images/bleu_chanel_2.jpeg"],
  },
  {
    id: 5,
    name: "Dior Sauvage",
    description:
      "A Fresh Spicy Woody Fragrance for Men. Top notes of Calabrian Bergamot and Pepper. Middle notes of Sichuan Pepper, Lavender, Pink Pepper, Vetiver, Patchouli, Geranium, and Elemi. Base notes include Ambroxan, Cedar, and Labdanum. One of our bold, masculine fragrances, designed for men who love freshness with a rugged, confident edge.",
    price: "PKR 1,300",
    images: ["images/dior_sauvage_1.jpeg", "images/dior_sauvage_2.jpeg"],
  },
  {
    id: 6,
    name: "Fendi Uomo",
    description:
      "A Woody Spicy Fragrance for Men. Top notes of Coriander, Marjoram, Angelica, Lavender, Bergamot, and Lemon. Middle notes of Carnation, Cypress, Cinnamon, Iris, Cyclamen, Rose, and Jasmine. Base notes include Leather, Patchouli, Vetiver, Amber, Cedar, Musk, Vanilla, and Coconut. One of our bold masculine fragrances — rich, warm, and ideal for men who want to make a confident statement.",
    price: "PKR 1,300",
    images: ["images/fendi_uomo_1.jpeg", "images/fendi_uomo_2.jpeg"],
  },
  {
    id: 7,
    name: "Burberry Body",
    description:
      "A Chypre Fruity Fragrance for Women. Top notes of Wormwood, Peach, and Freesia. Middle notes of Rose, Iris, and Sandalwood. Base notes include Musk, Cashmere Wood, Vanilla, and Amber. One of our most beloved feminine fragrances — warm, luxurious, and elegant, made for women who want to feel both soft and sensual.",
    price: "PKR 1,300",
    images: ["images/burberry_body_1.jpeg", "images/burberry_body_2.jpeg"],
  },
  {
    id: 8,
    name: "Gucci Guilty",
    description:
      "A Woody Aromatic Fragrance for Men. Top notes of Lavender and Lemon. Middle notes of Orange Blossom. Base notes include Cedarwood and Patchouli. A modern masculine scent that blends freshness with confidence. Its crisp citrus opening melts into warm woody accords, creating a clean yet seductive aroma — perfect for men who want to stand out effortlessly.",
    price: "PKR 1,300",
    images: ["images/gucci_guilty_1.jpeg", "images/gucci_guilty_2.jpeg"],
  },
  {
    id: 9,
    name: "Dunhill Desire Red",
    description:
      "An Amber Woody Fragrance for Men. Top notes of Apple, Lemon, Neroli, and Bergamot. Middle notes of Rose, Patchouli, and Teak Wood. Base notes include Vanilla and Musk. A bold and energizing fragrance that captures power, passion, and confidence. The fresh fruity opening blends smoothly with a warm woody heart and a sensual base — perfect for daily wear or special occasions.",
    price: "PKR 1,300",
    images: [
      "images/dunhill_desire_red_1.jpeg",
      "images/dunhill_desire_red_2.jpeg",
    ],
  },
  {
    id: 10,
    name: "Joop Jump",
    description:
      "An Aromatic Fougere Fragrance for Men. Top notes of Grapefruit, Caraway, and Rosemary. Middle notes of Heliotrope and Coriander. Base notes include Tonka Bean, Vetiver, and Musk. A vibrant and confident fragrance that blends freshness with masculinity. Its sparkling citrus top, spicy heart, and smooth woody base make it perfect for energetic and modern men.",
    price: "PKR 1,300",
    images: ["images/joop_jump_1.jpeg", "images/joop_jump_2.jpeg"],
  },
  {
    id: 11,
    name: "Boss",
    description:
      "A Woody Spicy Fragrance for Men. Top notes of Apple, Lemon, and Plum. Middle notes of Cinnamon, Mahogany, and Carnation. Base notes include Vanilla, Sandalwood, Cedar, Vetiver, and Olive Tree. A timeless and elegant masculine fragrance that combines warm spices with fresh fruity notes. Crafted for the confident gentleman who values sophistication, style, and strength — perfect for both daily wear and evening occasions.",
    price: "PKR 1,300",
    images: ["images/boss_1.jpeg", "images/boss_2.jpeg"],
  },
  {
    id: 12,
    name: "Eternity",
    description:
      "An Aromatic Fougere Fragrance for Men. Top notes of Lavender, Lemon, Bergamot, and Mandarin Orange. Middle notes of Coriander, Lily, Orange Blossom, Juniper Berries, Basil, Geranium, and Jasmine. Base notes include Sandalwood, Amber, Musk, Vetiver, and Brazilian Rosewood. A clean, timeless, and masculine fragrance that blends fresh citrus, herbs, and warm woods. It symbolizes confidence and calmness — perfect for men who carry elegance effortlessly.",
    price: "PKR 1,300",
    images: ["images/eternity_1.jpeg", "images/eternity_2.jpeg"],
  },
  {
    id: 13,
    name: "Issey Miyake",
    description:
      "A Woody Aquatic Fragrance for Men. Top notes of Yuzu, Lemon, Bergamot, and Tarragon. Middle notes of Nutmeg, Water Lily, Cinnamon, and Geranium. Base notes include Sandalwood, Cedar, Musk, Amber, and Vetiver. A fresh and uplifting fragrance inspired by the purity of water and the strength of nature. Its bright citrus opening and woody-musky dry-down make it a timeless classic for men who appreciate elegance, calm, and sophistication.",
    price: "PKR 1,300",
    images: ["images/issey_miyake_1.jpeg", "images/issey_miyake_2.jpeg"],
  },
  {
    id: 14,
    name: "Erba Pura",
    description:
      "A Fruity Oriental Fragrance – Unisex. Top notes of Orange, Bergamot, and Lemon. Middle note is a blend of Mediterranean fruits. Base notes include White Musk, Amber, and Vanilla. Erba Pura – Special Edition is a luxurious unisex fragrance that radiates purity, sweetness, and sophistication. Its sparkling citrus opening melts into a soft fruity heart and a creamy amber-vanilla base — creating a scent that feels both exotic and elegant.",
    price: "PKR 1,650",
    images: ["images/erba_pura_1.jpeg", "images/erba_pura_2.jpeg"],
  },
  {
    id: 15,
    name: "Dunhill Desire Blue",
    description:
      "An Aromatic Aquatic Fragrance for Men. Top notes of Litchi, Mandarin Orange, Lotus, and Bergamot. Middle notes of Sea Notes, Orange, and Brazilian Rosewood. Base notes include Tonka Bean, Amber, Musk, and Benzoin. A refreshing and confident fragrance that captures the calm energy of the ocean. It's a perfect blend of cool aquatic notes and warm amber undertones — made for men who love sophistication with a relaxed charm.",
    price: "PKR 1,300",
    images: [
      "images/dunhill_desire_blue_1.jpeg",
      "images/dunhill_desire_blue_2.jpeg",
    ],
  },
  {
    id: 16,
    name: "Davidoff Cool Water",
    description:
      "A Refreshing Aquatic Floral Fragrance for Women. Embodies the essence of ocean breeze — soft, pure, and feminine. Top notes of Melon, Lotus, Lemon, Pineapple, and Calone give a watery freshness. The heart blooms with Water Lily, Lily-of-the-Valley, Jasmine, Rose, and Honey. Base notes of Musk, Vanilla, Sandalwood, Amber, and Vetiver. A timeless fragrance that highlights elegance, freshness, and confidence — perfect for daily wear or a light signature scent.",
    price: "PKR 1,300",
    images: [
      "images/davidoff_cool_water_1.jpeg",
      "images/davidoff_cool_water_2.jpeg",
    ],
  },
  {
    id: 17,
    name: "One Million",
    description:
      "A Bold Woody-Spicy Fragrance for Men. A rich and daring fragrance that defines luxury and power. Top notes of Blood Mandarin, Peppermint, and Grapefruit create an energetic start. The heart features Rose, Cinnamon, and Spicy Notes. Base notes reveal deep masculine warmth from Leather, Amber, Patchouli, and Woody Notes. Made for men who want to stand out — confident, modern, and irresistibly bold.",
    price: "PKR 1,300",
    images: ["images/one_million_1.jpeg", "images/one_million_2.jpeg"],
  },
];
