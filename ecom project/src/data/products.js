const baseProducts = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    price: 120,
    originalPrice: null,
    rating: 4.5,
    image: "/products/tshirt_tape_front.png", // Main image
    images: ["/products/tshirt_tape_front.png", "/products/tshirt_tape_side.png", "/products/tshirt_tape_back.png"],
    discount: null,
    category: "tshirts",
    colors: [
        { name: "Black", hex: "#000000" }, 
        { name: "White", hex: "#FFFFFF" }
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    style: "Casual",
    description: "A stylish black t-shirt with tape details, perfect for a casual urban look. Made from high-quality cotton."
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    price: 180, 
    originalPrice: 260,
    rating: 3.5,
    image: "/products/skinny_jeans_front.png",
    images: ["/products/skinny_jeans_front.png", "/products/skinny_jeans_side.png", "/products/skinny_jeans_back.png"],
    discount: 20,
    category: "jeans",
    colors: [
        { name: "Blue", hex: "#0000FF" }, 
        { name: "Black", hex: "#000000" }
    ],
    sizes: ["Medium", "Large", "X-Large"], 
    style: "Casual",
    description: "Classic blue skinny fit jeans. Durable denim with a comfortable stretch."
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: 180,
    originalPrice: null,
    rating: 5,
    image: "/products/checkered_shirt_front.png",
    images: ["/products/checkered_shirt_front.png", "/products/checkered_shirt_side.png", "/products/checkered_shirt_back.png"],
    discount: null,
    category: "shirts",
    colors: [
        { name: "Red", hex: "#FF0000" }, 
        { name: "Blue", hex: "#0000FF" }
    ],
    sizes: ["Medium", "Large"],
    style: "Formal",
    description: "Red checkered shirt for a sharp, formal or smart-casual appearance."
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    rating: 4.5,
    image: "/products/striped_tshirt.png",
    images: ["/products/striped_tshirt.png"],
    discount: 30,
    category: "tshirts",
    colors: [
        { name: "Orange", hex: "#FFA500" }, 
        { name: "White", hex: "#FFFFFF" }
    ],
    sizes: ["Small", "Medium", "Large"],
    style: "Casual",
    description: "Vibrant orange and white striped t-shirt."
  },
  {
    id: 5,
    name: "Vertical Striped Shirt",
    price: 150, 
    originalPrice: 235,
    rating: 5.0,
    image: "/products/vertical_striped.png",
    images: ["/products/vertical_striped.png"],
    discount: 10,
    category: "shirts",
    colors: [
        { name: "Green", hex: "#008000" }, 
        { name: "White", hex: "#FFFFFF" }
    ],
    sizes: ["Medium", "Large", "X-Large"],
    style: "Formal",
    description: "Vertical striped shirt in green, slimming and stylish."
  },
  {
    id: 6,
    name: "Courage Graphic T-shirt",
    price: 145,
    originalPrice: null,
    rating: 4.0,
    image: "/products/courage_tshirt.png",
    images: ["/products/courage_tshirt.png"],
    discount: null,
    category: "tshirts",
    colors: [
        { name: "Orange", hex: "#FFA500" }, 
        { name: "Black", hex: "#000000" }
    ],
    sizes: ["Small", "Medium", "Large"],
    style: "Gym",
    description: "Bold graphic t-shirt for your workout sessions."
  },
  {
    id: 7,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    originalPrice: null,
    rating: 3.5,
    image: "/products/bermuda_shorts.png",
    images: ["/products/bermuda_shorts.png"],
    discount: null,
    category: "shorts",
    colors: [
        { name: "Blue", hex: "#0000FF" }, 
        { name: "Grey", hex: "#808080" }
    ], 
    sizes: ["Small", "Medium", "Large"],
    style: "Casual",
    description: "Comfortable bermuda shorts for hot days."
  },
  {
    id: 8,
    name: "Faded Skinny Jeans",
    price: 160, 
    originalPrice: null,
    rating: 4.5,
    image: "/products/faded_jeans.png",
    images: ["/products/faded_jeans.png"],
    discount: null,
    category: "jeans",
    colors: [
        { name: "Black", hex: "#000000" }, 
        { name: "Blue", hex: "#0000FF" }
    ],
    sizes: ["Medium", "Large"],
    style: "Party",
    description: "Faded black skinny jeans with a rock-n-roll vibe."
  },
  {
    id: 9,
    name: "Pink Party Dress",
    price: 190,
    originalPrice: null,
    rating: 5.0,
    image: "/products/pink_dress.png",
    images: ["/products/pink_dress.png"],
    category: "hoodie", // Keeping 'hoodie' as placeholder or update if category list allows dresses
    colors: [
        { name: "Pink", hex: "#FFC0CB" }, 
        { name: "Purple", hex: "#800080" }
    ],
    sizes: ["Small", "Medium"],
    style: "Party",
    description: "Elegant pink dress for parties and events."
  },
  {
    id: 10,
    name: "Yellow Gym Tee", 
    price: 60,
    originalPrice: null,
    rating: 4.0,
    image: "/products/yellow_tee.png",
    images: ["/products/yellow_tee.png"],
    category: "tshirts",
    colors: [
        { name: "Yellow", hex: "#FFFF00" }
    ],
    sizes: ["Small", "Medium", "Large"],
    style: "Gym",
    description: "Bright yellow tee to keep you visible and cool."
  },
  {
    id: 11,
    name: "Cyan Summer Shirt", 
    price: 110,
    originalPrice: null,
    rating: 4.2,
    image: "/products/cyan_shirt.png",
    images: ["/products/cyan_shirt.png"],
    category: "shirts",
    colors: [
        { name: "Cyan", hex: "#00FFFF" }
    ],
    sizes: ["X-Large", "XX-Large"],
    style: "Casual",
    description: "Cool cyan shirt for summer vibes."
  },
   {
    id: 12,
    name: "Extra Small Top", 
    price: 55,
    originalPrice: null,
    rating: 4.2,
    image: "/products/green_top.png",
    images: ["/products/green_top.png"],
    category: "tshirts",
    colors: [
        { name: "Green", hex: "#008000" }
    ],
    sizes: ["XX-Small", "X-Small"],
    style: "Casual",
    description: "Petite top in a lovely green shade."
  }
];

const expandedProducts = [];
// Create enough items to test pagination
for (let i = 0; i < 3; i++) {
  baseProducts.forEach(p => {
    expandedProducts.push({
      ...p,
      id: p.id + (i * 20) // Ensure unique IDs
    });
  });
}

const products = expandedProducts;
export { products };
