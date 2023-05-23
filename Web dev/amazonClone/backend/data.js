import bcrypt from "bcryptjs";


const data = {
    users: [
        {
            name: "Amaino Oti",
            email: "amainooti@gmail.com",
            password: bcrypt.hashSync('123456'),
            isAdmin: true
        },
        {
            name: "Kunle",
            email: "kunle@gmail.com",
            password: bcrypt.hashSync('0123456'),
            isAdmin: false
        },
    ],
    products: [
        {
            key:1,
            name: 'Nike Slim Shirt',
            slug: 'nike-slim-shirt',
            catergory: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4,
            numReviews: 10,
            quality: 'High quality shirt'
        },

        {
            key:2,
            name: 'Adidas fit shirt',
            slug: 'adidas-fit-shirt',
            catergory: 'Shirts',
            image: '/images/p2.jpg',
            price: 120,
            countInStock: 0,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            quality: 'High quality shirt'
        },
        {
            key:3,
            name: 'Adidas fit pants',
            slug: 'adidas-fit-pants',
            catergory: 'Pants',
            image: '/images/p3.jpg',
            price: 65,
            countInStock: 5,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 10,
            quality: 'High quality pants'
        },
        {
            key:4,
            name: 'Nike fit pants',
            slug: 'nike-fit-pants',
            catergory: 'Pants',
            image: '/images/p4.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.0,
            numReviews: 12,
            quality: 'High quality pants'
        },

    ]
}

export default data

