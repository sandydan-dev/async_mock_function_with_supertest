const {
    fetAllAsseccoriesDetails,
    fetAllAsseccoriesById,
    fetAllAsseccoriesByBrand,
    fetAllAsseccoriesMaxPrice,
    fetAllAsseccoriesLessPrice,
    fetAllAsseccoriesRating,
    fetAllAsseccoriesStorage,
    calculateStockPrice,
    fetMobileColorVariants,
    updateMobileByid
} = require('../controllers/mobile.controller')
const http = require('http')
const { app } = require('../index')
const request = require('supertest')


// jest mock function
jest.mock('../controllers/mobile.controller.js', () => ({
    ...jest.requireActual('../controllers/mobile.controller.js'),
    fetAllAsseccoriesDetails: jest.fn(),
    fetAllAsseccoriesById: jest.fn(),
    fetAllAsseccoriesByBrand: jest.fn(),
    fetAllAsseccoriesMaxPrice: jest.fn(),
    fetAllAsseccoriesLessPrice: jest.fn(),
    fetAllAsseccoriesRating: jest.fn(),
    fetAllAsseccoriesStorage: jest.fn(),
    calculateStockPrice: jest.fn(),
    fetMobileColorVariants: jest.fn(),
    updateMobileByid: jest.fn(),

}))


let server;

beforeAll((done) => {
    server = http.createServer(app)
    server.listen(3001, done)
})


afterAll((done) => {
    server.close(done)
})


describe('mobile phones mock function', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    // first : fetch all mobile data
    test('should return all mobile data list', () => {
        let mockMob = [
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
            }
        ];
        fetAllAsseccoriesDetails.mockReturnValue(mockMob)
        let result = fetAllAsseccoriesDetails()
        expect(result).toEqual(mockMob)
        expect(fetAllAsseccoriesDetails).toHaveBeenCalled()

    })
    // second : it return mobile by id
    test('should return mobile id', async () => {
        let mockMob = {
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
        }
        fetAllAsseccoriesById.mockReturnValue(mockMob)
        let result = await fetAllAsseccoriesById(1)
        expect(result).toEqual(mockMob)
        expect(fetAllAsseccoriesById).toHaveBeenCalledWith(1)
    })

    // third : it return undefined if id is not found
    test('should return undefined', async () => {
        fetAllAsseccoriesById.mockReturnValue(undefined)
        let result = fetAllAsseccoriesById(123)
        expect(result).toBeUndefined()
        expect(fetAllAsseccoriesById).toHaveBeenCalledWith(123)
    })

    // fourth : it return mobiles by brand
    test('should return mobiles by brand', async () => {
        let mockMob = [
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
            }
        ];

        fetAllAsseccoriesByBrand.mockReturnValue(mockMob)
        let result = fetAllAsseccoriesByBrand("Apple")
        expect(result).toEqual(mockMob)
        expect(fetAllAsseccoriesByBrand).toHaveBeenCalledWith("Apple")
    })


    // fifth : should return price
    test('should return mobile max price', async () => {
        let mockMob = [
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
            }
        ];
        fetAllAsseccoriesMaxPrice.mockReturnValue(mockMob)
        let result = await fetAllAsseccoriesMaxPrice(50000)
        expect(result).toEqual(mockMob)
        expect(fetAllAsseccoriesMaxPrice).toHaveBeenCalledWith(50000)
    })


    // sixth : should return price
    test('should return mobile less price', async () => {
        let mockMob = [
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
            }
        ];
        fetAllAsseccoriesLessPrice.mockReturnValue(mockMob)
        let result = await fetAllAsseccoriesLessPrice(50000)
        expect(result).toEqual(mockMob)
        expect(fetAllAsseccoriesLessPrice).toHaveBeenCalledWith(50000)
    })


    // seventh : should return mobile rating
    test('should return mobil rating', async () => {
        let mockMob = [
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
            }
        ];

        fetAllAsseccoriesRating.mockReturnValue(mockMob)
        let result = await fetAllAsseccoriesRating(4.8)
        expect(result).toEqual(mockMob)
        expect(fetAllAsseccoriesRating).toHaveBeenCalledWith(4.8)
    })

    // eighth : should return storage
    test('should return mobile storage', async () => {
        let mockMob = [
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
            }
        ];

        fetAllAsseccoriesStorage.mockReturnValue(mockMob)
        let result = await fetAllAsseccoriesStorage("64GB")
        expect(result).toEqual(mockMob)
        expect(fetAllAsseccoriesStorage).toHaveBeenCalledWith("64GB")
    })


    // nineth : should return stock and price
    test('should return stock and price', async () => {
        let mockMob = [
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
            }
        ];

        calculateStockPrice.mockReturnValue(mockMob)
        let result = await calculateStockPrice(500, 50000)
        expect(result).toEqual(mockMob)
        expect(calculateStockPrice).toHaveBeenCalledWith(500, 50000)
    })


    // tenth : should retur color variant
    test('should return mobile color variants', async () => {
        let mockMob = [
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
            }
        ];

        fetAllAsseccoriesStorage.mockReturnValue(mockMob)
        let result = await fetAllAsseccoriesStorage("64GB")
        expect(result).toEqual(mockMob)
        expect(fetAllAsseccoriesStorage).toHaveBeenCalledWith("64GB")
    })


    // eleventh : should return stock and price
    test('should return stock and price', async () => {
        let mockMob = [
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
            }
        ];

        fetMobileColorVariants.mockReturnValue(mockMob)
        let result = await fetMobileColorVariants("Starlight")
        expect(result).toEqual(mockMob)
        expect(fetMobileColorVariants).toHaveBeenCalledWith("Starlight")
    })


    // twelth write update test mock function
    test('should return updated mock funtion', async () => {
        let mockMob = {
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
        }

        updateMobileByid.mockReturnValue(mockMob)
        let result = await updateMobileByid(1, 'Relience')
        expect(result).toEqual(mockMob)
        expect(updateMobileByid).toHaveBeenCalledWith(1, 'Relience')
    })

    // thirteen : should delete mobile by id

})