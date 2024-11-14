const mobilePhones = [
  {
    id: 1,
    name: "Apple iPhone 13",
    brand: "Apple",
    category: "Flagship",
    price: 69900.0,
    description: "6.1-inch display, A15 Bionic chip, dual-camera setup.",
    rating: 4.8,
    reviews: 10000,
    stock: 500,
    country: "India",
    sizeOptions: ["64GB", "128GB", "256GB"],
    colorVariants: ["Starlight", "Midnight", "Blue", "Pink", "Green"],
    material: "Glass front and back",
    warranty: "1 Year",
    additionalFeatures: [
      "IP68 Water Resistant",
      "Night mode photography",
      "Fast charging support",
    ],
    time: new Date(1000)
  },
  {
    id: 2,
    name: "Samsung Galaxy S22 Ultra",
    brand: "Samsung",
    category: "Flagship",
    price: 89999.0,
    description:
      "6.8-inch Dynamic AMOLED display, S-Pen support, quad-camera setup.",
    rating: 4.7,
    reviews: 5000,
    stock: 300,
    country: "India",
    sizeOptions: ["128GB", "256GB", "512GB", "1TB"],
    colorVariants: ["Burgundy Red", "Graphite", "Sky Blue", "White", "Black"],
    material: "Glass front and back",
    warranty: "1 Year",
    additionalFeatures: [
      "120Hz refresh rate",
      "Long-lasting 5000mAh battery",
      "IP67 dust and water resistant",
    ],
  },
  {
    id: 3,
    name: "Google Pixel 6 Pro",
    brand: "Google",
    category: "Flagship",
    price: 85900.0,
    description:
      "6.7-inch OLED display, Google Tensor chip, triple-camera setup.",
    rating: 4.6,
    reviews: 2000,
    stock: 200,
    country: "India",
    sizeOptions: ["128GB", "256GB", "512GB"],
    colorVariants: ["Sorta Seafoam", "Kinda Coral", "Stormy Black"],
    material: "Glass front and back",
    warranty: "1 Year",
    additionalFeatures: [
      "Excellent camera performance",
      "Timely software updates",
      "IP68 water and dust resistance",
    ],
  },
  {
    id: 4,
    name: "OnePlus 9 Pro",
    brand: "OnePlus",
    category: "Flagship",
    price: 64999.0,
    description:
      "6.7-inch AMOLED display, Snapdragon 888 chip, quad-camera setup.",
    rating: 4.5,
    reviews: 3000,
    stock: 400,
    country: "India",
    sizeOptions: ["128GB", "256GB"],
    colorVariants: ["Morning Mist", "Pine Green", "Stellar Black"],
    material: "Glass front and back",
    warranty: "1 Year",
    additionalFeatures: [
      "120Hz refresh rate",
      "Fast charging support",
      "IP68 water and dust resistant",
    ],
  },
  {
    id: 5,
    name: "Xiaomi Mi 11 Ultra",
    brand: "Xiaomi",
    category: "Flagship",
    price: 69999.0,
    description:
      "6.81-inch AMOLED display, Snapdragon 888 chip, triple-camera setup.",
    rating: 4.6,
    reviews: 2500,
    stock: 350,
    country: "India",
    sizeOptions: ["256GB", "512GB"],
    colorVariants: ["Cosmic Black", "White"],
    material: "Ceramic back",
    warranty: "1 Year",
    additionalFeatures: [
      "120Hz refresh rate",
      "67W fast charging",
      "IP67 dust and water resistant",
    ],
  },
  {
    id: 6,
    name: "Samsung Galaxy S22",
    brand: "Samsung",
    category: "Flagship",
    price: 72999.0,
    description: "6.1-inch Dynamic AMOLED display, triple-camera setup.",
    rating: 4.5,
    reviews: 3000,
    stock: 400,
    country: "India",
    sizeOptions: ["128GB", "256GB"],
    colorVariants: [
      "Phantom Black",
      "White",
      "Pink Gold",
      "Green",
      "Graphite",
      "Cream",
      "Violet",
      "Sky Blue",
    ],
    material: "Glass front and back",
    warranty: "1 Year",
    additionalFeatures: [
      "120Hz refresh rate",
      "Long-lasting 3700mAh battery",
      "IP67 dust and water resistant",
    ],
  },
  {
    id: 7,
    name: "Apple iPhone 13 Pro",
    brand: "Apple",
    category: "Flagship",
    price: 99900.0,
    description:
      "6.1-inch Super Retina XDR display, A15 Bionic chip, quad-camera setup.",
    rating: 4.8,
    reviews: 8000,
    stock: 450,
    country: "India",
    sizeOptions: ["64GB", "256GB", "512GB", "1TB"],
    colorVariants: ["Graphite", "Gold", "Silver", "Sierra Blue"],
    material: "Stainless Steel frame, Tougher Ceramic Shield",
    warranty: "1 Year",
    additionalFeatures: [
      "120Hz refresh rate",
      "Night mode photography",
      "Fast charging support",
    ],
  },
  {
    id: 8,
    name: "OnePlus 9",
    brand: "OnePlus",
    category: "Flagship",
    price: 59999.0,
    description:
      "6.55-inch AMOLED display, Snapdragon 888 chip, triple-camera setup.",
    rating: 4.4,
    reviews: 2500,
    stock: 350,
    country: "India",
    sizeOptions: ["128GB", "256GB"],
    colorVariants: ["Astral Black", "Arctic Sky"],
    material: "Glass front and back",
    warranty: "1 Year",
    additionalFeatures: [
      "90Hz refresh rate",
      "Fast charging support",
      "IP68 water and dust resistant",
    ],
  },
  {
    id: 9,
    name: "Samsung Galaxy Z Fold3 5G",
    brand: "Samsung",
    category: "Foldable",
    price: 149999.0,
    description: "7.6-inch Dynamic AMOLED 2X display, quad-camera setup.",
    rating: 4.6,
    reviews: 1000,
    stock: 50,
    country: "India",
    sizeOptions: ["256GB", "512GB"],
    colorVariants: ["Phantom Black", "Phantom Green", "Phantom Silver"],
    material: "Armor Aluminum frame, Gorilla Glass Victus+",
    warranty: "1 Year",
    additionalFeatures: [
      "120Hz refresh rate",
      "Long-lasting 4400mAh battery",
      "IPX8 water resistance",
    ],
  },
  {
    id: 10,
    name: "Xiaomi Mi 11",
    brand: "Xiaomi",
    category: "Flagship",
    price: 54999.0,
    description:
      "6.81-inch AMOLED display, Snapdragon 888 chip, triple-camera setup.",
    rating: 4.5,
    reviews: 2000,
    stock: 300,
    country: "India",
    sizeOptions: ["128GB", "256GB"],
    colorVariants: ["Midnight Gray", "Horizon Blue", "Cloud White"],
    material: "Glass front and back",
    warranty: "1 Year",
    additionalFeatures: [
      "120Hz refresh rate",
      "55W fast charging",
      "In-display fingerprint sensor",
    ],
  },
  {
    id: 11,
    name: "Apple iPhone 13 mini",
    brand: "Apple",
    category: "Compact Flagship",
    price: 69900.0,
    description:
      "5.4-inch Super Retina HD display, A15 Bionic chip, dual-camera setup.",
    rating: 4.7,
    reviews: 5000,
    stock: 400,
    country: "India",
    sizeOptions: ["64GB", "128GB", "256GB"],
    colorVariants: ["Starlight", "Midnight", "Blue", "Pink", "Green"],
    material: "Glass front and back",
    warranty: "1 Year",
    additionalFeatures: [
      "IP68 Water Resistant",
      "Night mode photography",
      "Fast charging support",
    ],
  },
  {
    id: 12,
    name: "Samsung Galaxy S22+",
    brand: "Samsung",
    category: "Flagship",
    price: 84999.0,
    description: "6.6-inch Dynamic AMOLED display, triple-camera setup.",
    rating: 4.6,
    reviews: 2500,
    stock: 350,
    country: "India",
    sizeOptions: ["128GB", "256GB"],
    colorVariants: [
      "Phantom Black",
      "White",
      "Pink Gold",
      "Green",
      "Graphite",
      "Cream",
      "Violet",
      "Sky Blue",
    ],
    material: "Glass front and back",
    warranty: "1 Year",
    additionalFeatures: [
      "120Hz refresh rate",
      "Long-lasting 4500mAh battery",
      "IP67 dust and water resistant",
    ],
  },
  {
    id: 13,
    name: "Google Pixel 6",
    brand: "Google",
    category: "Mid-range Flagship",
    price: 59999.0,
    description:
      "6.4-inch OLED display, Google Tensor chip, dual-camera setup.",
    rating: 4.5,
    reviews: 1500,
    stock: 200,
    country: "India",
    sizeOptions: ["128GB", "256GB"],
    colorVariants: ["Sorta Seafoam", "Kinda Coral", "Stormy Black"],
    material: "Glass front and back",
    warranty: "1 Year",
    additionalFeatures: [
      "Excellent camera performance",
      "Timely software updates",
      "IP68 water and dust resistance",
    ],
  },
  {
    id: 14,
    name: "OnePlus Nord CE 2 Lite 5G",
    brand: "OnePlus",
    category: "Mid-range",
    price: 19999.0,
    description:
      "6.59-inch LCD display, Snapdragon 695 chip, triple-camera setup.",
    rating: 4.3,
    reviews: 3000,
    stock: 500,
    country: "India",
    sizeOptions: ["64GB", "128GB"],
    colorVariants: ["Black Dusk", "Blue Tide"],
    material: "Plastic back",
    warranty: "1 Year",
    additionalFeatures: [
      "90Hz refresh rate",
      "33W fast charging",
      "Dual SIM support",
    ],
  },
  {
    id: 15,
    name: "Samsung Galaxy A52",
    brand: "Samsung",
    category: "Mid-range",
    price: 26999.0,
    description: "6.5-inch Super AMOLED display, quad-camera setup.",
    rating: 4.4,
    reviews: 2500,
    stock: 350,
    country: "India",
    sizeOptions: ["128GB", "256GB"],
    colorVariants: [
      "Awesome Black",
      "Awesome White",
      "Awesome Blue",
      "Awesome Violet",
    ],
    material: "Glass front, Plastic back",
    warranty: "1 Year",
    additionalFeatures: [
      "90Hz refresh rate",
      "4500mAh battery",
      "IP67 dust and water resistant",
      "Quad-camera setup with 64MP primary sensor",
      "32MP front camera",
      "Up to 8GB RAM",
    ],
  },
  {
    id: 16,
    name: "Realme GT Neo 2",
    brand: "Realme",
    category: "Mid-range Flagship",
    price: 31999.0,
    description:
      "6.62-inch AMOLED display, Snapdragon 870 chip, triple-camera setup.",
    rating: 4.4,
    reviews: 2000,
    stock: 300,
    country: "India",
    sizeOptions: ["128GB", "256GB"],
    colorVariants: ["Neo Green", "Lime Black"],
    material: "Glass front, Plastic back",
    warranty: "1 Year",
    additionalFeatures: [
      "120Hz refresh rate",
      "65W fast charging",
      "In-display fingerprint sensor",
    ],
  },
  {
    id: 17,
    name: "Xiaomi Redmi Note 11 Pro+ 5G",
    brand: "Xiaomi",
    category: "Budget Flagship",
    price: 20999.0,
    description:
      "6.67-inch AMOLED display, MediaTek Dimensity 920 chip, triple-camera setup.",
    rating: 4.4,
    reviews: 3000,
    stock: 500,
    country: "India",
    sizeOptions: ["64GB", "128GB", "256GB"],
    colorVariants: [
      "Mirage Blue",
      "Forest Green",
      "Interstellar Blue",
      "Starlight Purple",
    ],
    material: "Glass front, Plastic back",
    warranty: "1 Year",
    additionalFeatures: [
      "120Hz refresh rate",
      "67W fast charging",
      "IP53 splash proof",
    ],
  },
  {
    id: 18,
    name: "Samsung Galaxy A73 5G",
    brand: "Samsung",
    category: "Mid-range",
    price: 41999.0,
    description: "6.7-inch Super AMOLED display, quad-camera setup.",
    rating: 4.5,
    reviews: 2000,
    stock: 350,
    country: "India",
    sizeOptions: ["128GB", "256GB"],
    colorVariants: [
      "Awesome Mint",
      "Awesome Gray",
      "Awesome White",
      "Awesome Black",
    ],
    material: "Glass front, Plastic back",
    warranty: "1 Year",
    additionalFeatures: [
      "120Hz refresh rate",
      "5000mAh battery",
      "IP67 dust and water resistant",
    ],
  },
  {
    id: 19,
    name: "Oppo Reno 7 Pro",
    brand: "Oppo",
    category: "Mid-range Flagship",
    price: 39999.0,
    description:
      "6.55-inch AMOLED display, MediaTek Dimensity 1200-MAX chip, triple-camera setup.",
    rating: 4.4,
    reviews: 2500,
    stock: 400,
    country: "India",
    sizeOptions: ["256GB"],
    colorVariants: ["Startrails Blue", "Starlight Black"],
    material: "Glass front and back",
    warranty: "1 Year",
    additionalFeatures: [
      "90Hz refresh rate",
      "65W fast charging",
      "In-display fingerprint sensor",
    ],
  },
  {
    id: 20,
    name: "Vivo X80",
    brand: "Vivo",
    category: "Flagship",
    price: 79999.0,
    description:
      "6.78-inch AMOLED display, MediaTek Dimensity 9000 chip, triple-camera setup.",
    rating: 4.6,
    reviews: 1500,
    stock: 200,
    country: "India",
    sizeOptions: ["128GB", "256GB"],
    colorVariants: ["Urban Blue", "Legend Black"],
    material: "Glass front and back",
    warranty: "1 Year",
    additionalFeatures: [
      "120Hz refresh rate",
      "80W fast charging",
      "IP68 water and dust resistant",
    ],
  },
  {
    id: 21,
    name: "Motorola Edge 30 Pro",
    brand: "Motorola",
    category: "Flagship",
    price: 48999.0,
    description:
      "6.7-inch OLED display, Snapdragon 8 Gen 1 chip, triple-camera setup.",
    rating: 4.5,
    reviews: 1000,
    stock: 150,
    country: "India",
    sizeOptions: ["128GB", "256GB"],
    colorVariants: ["Cosmos Blue", "Stealth Black"],
    material: "Glass front and back",
    warranty: "1 Year",
    additionalFeatures: [
      "144Hz refresh rate",
      "125W fast charging",
      "IP68 water and dust resistant",
    ],
  },
  {
    id: 22,
    name: "Realme GT 2",
    brand: "Realme",
    category: "Flagship",
    price: 37999.0,
    description:
      "6.62-inch AMOLED display, Snapdragon 8 Gen 1 chip, triple-camera setup.",
    rating: 4.5,
    reviews: 2000,
    stock: 300,
    country: "India",
    sizeOptions: ["128GB", "256GB"],
    colorVariants: ["Paper White", "Steel Black", "Titanium Blue"],
    material: "Bio-based polymer back",
    warranty: "1 Year",
    additionalFeatures: [
      "120Hz refresh rate",
      "65W fast charging",
      "In-display fingerprint sensor",
    ],
  },
  {
    id: 23,
    name: "Samsung Galaxy A53 5G",
    brand: "Samsung",
    category: "Mid-range",
    price: 34999.0,
    description: "6.5-inch Super AMOLED display, quad-camera setup.",
    rating: 4.4,
    reviews: 2500,
    stock: 400,
    country: "India",
    sizeOptions: ["128GB", "256GB"],
    colorVariants: [
      "Awesome Black",
      "Awesome White",
      "Awesome Blue",
      "Awesome Peach",
    ],
    material: "Glass front, Plastic back",
    warranty: "1 Year",
    additionalFeatures: [
      "120Hz refresh rate",
      "5000mAh battery",
      "IP67 dust and water resistant",
    ],
  },
  {
    id: 24,
    name: "Xiaomi Redmi 10 Prime",
    brand: "Xiaomi",
    category: "Budget",
    price: 12999.0,
    description:
      "6.5-inch HD+ display, MediaTek Helio G88 chip, dual-camera setup.",
    rating: 4.3,
    reviews: 3000,
    stock: 500,
    country: "India",
    sizeOptions: ["64GB", "128GB"],
    colorVariants: ["Bifrost Blue", "Phantom Black", "Astral White"],
    material: "Plastic back",
    warranty: "1 Year",
    additionalFeatures: [
      "90Hz refresh rate",
      "6000mAh battery",
      "Dual SIM support",
    ],
  },
  {
    id: 25,
    name: "Oppo Reno 8 Pro",
    brand: "Oppo",
    category: "Mid-range Flagship",
    price: 45999.0,
    description:
      "6.7-inch AMOLED display, MediaTek Dimensity 8100-MAX chip, triple-camera setup.",
    rating: 4.5,
    reviews: 2000,
    stock: 350,
    country: "India",
    sizeOptions: ["256GB"],
    colorVariants: ["Glazed Green", "Glazed Black"],
    material: "Glass front and back",
    warranty: "1 Year",
    additionalFeatures: [
      "120Hz refresh rate",
      "80W fast charging",
      "In-display fingerprint sensor",
    ],
  },
  {
    id: 26,
    name: "Vivo X70 Pro+",
    brand: "Vivo",
    category: "Flagship",
    price: 79999.0,
    description:
      "6.78-inch AMOLED display, Qualcomm Snapdragon 888 chip, quad-camera setup.",
    rating: 4.6,
    reviews: 1500,
    stock: 200,
    country: "India",
    sizeOptions: ["256GB", "512GB"],
    colorVariants: ["Enigma Black", "Imagination Plane"],
    material: "Glass front and back",
    warranty: "1 Year",
    additionalFeatures: [
      "120Hz refresh rate",
      "55W fast charging",
      "IP68 water and dust resistant",
    ],
  },
  {
    id: 27,
    name: "Motorola Edge 30",
    brand: "Motorola",
    category: "Mid-range Flagship",
    price: 29999.0,
    description:
      "6.5-inch OLED display, Snapdragon 778G chip, dual-camera setup.",
    rating: 4.4,
    reviews: 1500,
    stock: 250,
    country: "India",
    sizeOptions: ["128GB", "256GB"],
    colorVariants: ["Meteorite Gray", "Supermoon Silver", "Cosmic Black"],
    material: "Glass front and back",
    warranty: "1 Year",
    additionalFeatures: [
      "144Hz refresh rate",
      "33W fast charging",
      "IP52 splash resistant",
    ],
  },
  {
    id: 28,
    name: "Realme GT Neo 3",
    brand: "Realme",
    category: "Mid-range Flagship",
    price: 36999.0,
    description:
      "6.62-inch AMOLED display, MediaTek Dimensity 8100 chip, triple-camera setup.",
    rating: 4.5,
    reviews: 2000,
    stock: 350,
    country: "India",
    sizeOptions: ["128GB", "256GB"],
    colorVariants: ["Nitro Blue", "Sprint White", "Striker Black"],
    material: "Glass front, Plastic back",
    warranty: "1 Year",
    additionalFeatures: [
      "120Hz refresh rate",
      "80W fast charging",
      "In-display fingerprint sensor",
    ],
  },
  {
    id: 29,
    name: "Samsung Galaxy M32",
    brand: "Samsung",
    category: "Budget",
    price: 14999.0,
    description: "6.4-inch Super AMOLED display, quad-camera setup.",
    rating: 4.3,
    reviews: 3000,
    stock: 500,
    country: "India",
    sizeOptions: ["64GB", "128GB"],
    colorVariants: ["Black", "Light Blue", "White"],
    material: "Plastic back",
    warranty: "1 Year",
    additionalFeatures: [
      "90Hz refresh rate",
      "6000mAh battery",
      "Dual SIM support",
    ],
  },
  {
    id: 30,
    name: "Xiaomi Redmi Note 11T 5G",
    brand: "Xiaomi",
    category: "Budget",
    price: 15999.0,
    description:
      "6.6-inch Full HD+ display, MediaTek Dimensity 810 chip, dual-camera setup.",
    rating: 4.3,
    reviews: 2500,
    stock: 400,
    country: "India",
    sizeOptions: ["64GB", "128GB"],
    colorVariants: ["Stardust White", "Matte Black", "Aquamarine Blue"],
    material: "Plastic back",
    warranty: "1 Year",
    additionalFeatures: [
      "120Hz refresh rate",
      "5000mAh battery",
      "Dual SIM support",
    ],
  },
];

// get all assecceroies
function fetAllAsseccoriesDetails() {
  try {
    return mobilePhones;
  } catch (error) {
    console.error("Error fetching data", error);
    throw new Error("Failed to retrieve all mobile data");
  }
}

// get asseccories by id
function fetAllAsseccoriesById(id) {
  try {
    if (id) {
      return mobilePhones.find((mobile) => mobile.id === id);
    } else {
      return { message: "id  is required" };
    }
  } catch (error) {
    throw new Error("Asseccories not found by id somethig error");
  }
}

// get asseccories by brand
function fetAllAsseccoriesByBrand(brand) {
  try {
    let result = mobilePhones.filter((mobile) => mobile.brand === brand);
    if (result.length > 0) {
      return result;
    } else {
      return { message: "No asseccories found by brand" };
    }
  } catch (error) {
    return { message: "Mobile brands not found", error };
  }
}

//  get asseccories by price greate than
function fetAllAsseccoriesMaxPrice(price) {
  try {
    let result = mobilePhones.filter(
      (mobilePrice) => mobilePrice.price >= price
    );
    return result;
  } catch (error) {
    return { message: "Mobile price not found", error };
  }
}

//  get asseccories by price less than
function fetAllAsseccoriesLessPrice(price) {
  try {
    let result = mobilePhones.filter(
      (mobilePrice) => mobilePrice.price <= price
    );
    return result;
  } catch (error) {
    return { message: "Mobile price not found", error };
  }
}


// get asseccories by rating
function fetAllAsseccoriesRating(rating) {
  try {
    let result = mobilePhones.filter(
      (mobileRating) => mobileRating.rating >= rating
    );
    return result;
  } catch (error) {
    return { message: "Mobile rating not found", error };
  }
}


// get mobile by storage capacity

function fetAllAsseccoriesStorage(storage) {
  let result = mobilePhones.filter((mobile) => mobile.sizeOptions.includes(storage))

  return result;
}

// stock and price calculate

function calculateStockPrice(id) {
  let totalVal = 0

  for (let i = 0; i < mobilePhones.length; i++) {
    if (mobilePhones[i].id === id) {
      let result = mobilePhones[i].stock * mobilePhones[i].price
      totalVal = result
    }
  }
  return totalVal
}

// get mobile color by colorvarient
function fetMobileColorVariants(color) {
  console.log(`Searching for mobile phones with primary color: ${color}`);

  let result = mobilePhones.filter((mobile) => mobile.colorVariants.includes(color))
  console.log(`Found ${result.length} matching phone(s)`);

  return result
}


// update mobilePhones data by id
function updateMobileByid(id, brand) {
  let result = mobilePhones.find((mobile) => {
    if (mobile.id === id) {
      mobile.brand = brand
      return mobile
    } else {
      return null
    }
  })
  return result
}

function deleteMobilesById(id) {
 
  for (let i = 0; i < mobilePhones.length; i++) {
    if (mobilePhones[i].id === id) {
      mobilePhones.splice(i, 1)
    } else {
      return mobilePhones
    }
  }

}

module.exports = {
  fetAllAsseccoriesDetails,
  fetAllAsseccoriesById,
  fetAllAsseccoriesByBrand,
  fetAllAsseccoriesMaxPrice,
  fetAllAsseccoriesLessPrice,
  fetAllAsseccoriesRating,
  fetAllAsseccoriesStorage,
  calculateStockPrice,
  fetMobileColorVariants,
  updateMobileByid,
  deleteMobilesById
};
