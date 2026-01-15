/**
 * Mock data for Product Detail Page
 */

export const productData = {
  id: 1,
  name: "ONE LIFE GRAPHIC T-SHIRT",
  rating: 4.5,
  reviewCount: 451,
  price: 260,
  originalPrice: 300,
  discount: 40,
  description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  colors: [
    { name: 'Olive Green', hex: '#4F5630' },
    { name: 'Dark Green', hex: '#314F4A' },
    { name: 'Navy Blue', hex: '#31344F' }
  ],
  sizes: ['Small', 'Medium', 'Large', 'X-Large'],
  images: [
    '/products/Frame 32.png',
    '/products/Frame 33.png',
    '/products/Frame 34.png'
  ]
};

export const reviewsData = [
  {
    id: 1,
    name: "Samantha D.",
    rating: 5,
    date: "August 14, 2023",
    review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    verified: true
  },
  {
    id: 2,
    name: "Alex M.",
    rating: 4,
    date: "August 15, 2023",
    review: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    verified: true
  },
  {
    id: 3,
    name: "Ethan R.",
    rating: 5,
    date: "August 16, 2023",
    review: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    verified: true
  },
  {
    id: 4,
    name: "Olivia P.",
    rating: 4,
    date: "August 17, 2023",
    review: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    verified: true
  },
  {
    id: 5,
    name: "Liam K.",
    rating: 5,
    date: "August 18, 2023",
    review: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    verified: true
  },
  {
    id: 6,
    name: "Ava H.",
    rating: 4,
    date: "August 19, 2023",
    review: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    verified: true
  }
];

export const relatedProducts = [
  {
    id: 2,
    name: "Polo with Contrast Trims",
    price: 212,
    originalPrice: 242,
    rating: 4.0,
    image: "/products/Frame 33.png",
    discount: 20
  },
  {
    id: 3,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    image: "/products/Frame 34.png"
  },
  {
    id: 4,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image: "/products/Frame 38.png"
  },
  {
    id: 5,
    name: "Black Striped T-shirt",
    price: 120,
    originalPrice: 150,
    rating: 5.0,
    image: "/products/Frame 32.png",
    discount: 30
  }
];
