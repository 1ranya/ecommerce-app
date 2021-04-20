import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: "Rania", 
            password: bcrypt.hashSync('admin', 8),
            email: "admin@gmail.com",
            isAdmin: true
        },
        {
            name: "Omar", 
            password: bcrypt.hashSync('1234', 8),
            email: "Omar@gmail.com",
            isAdmin: false
        }
    ],
    products:[
        {
            _id:'1', 
            name:'Nike Slim Shirt',
            category: 'Shirts',
            image:'./images/p1.jpg', 
            price:120,
            countInStock: 10,
            brand:'Nike', 
            rating:2.5, 
            numReviews:5,
            description:'hight quality product',
        },
        {
            _id:'2', 
            name:'Nike Shirt',
            category: 'Shirts',
            image:'./images/p2.jpg', 
            price:100,
            countInStock: 20,
            brand:'Nike', 
            rating:4, 
            numReviews:10,
            description:'hight quality product',
        },
        {
            _id:'3', 
            name:'Adidas Slim Shirt',
            category: 'Shirts',
            image:'./images/p3.jpg', 
            price:120,
            countInStock: 0,
            brand:'Adidas', 
            rating:4.5, 
            numReviews:10,
            description:'hight quality product',
        },
        {
            _id:'4', 
            name:'Nike Slim pant',
            category: 'Shirts',
            image:'./images/p4.jpg', 
            price:110,
            countInStock: 50,
            brand:'Nike', 
            rating:3, 
            numReviews:2,
            description:'hight quality product',
        },
        {
            _id:'5', 
            name:'Puma Slim pant',
            category: 'Shirts',
            image:'./images/p5.jpg', 
            price:140,
            countInStock: 15,
            brand:'Puma', 
            rating:5, 
            numReviews:10,
            description:'hight quality product',
        },
    ]
}
export default data;