import Mongoose from "mongoose";

const productSchema = new Mongoose.Schema({
    name:{
        type: String, 
        unique: true,
        required: true
    }, 
    category:{
        type: String, 
        required: true
    }, 
    image:{
        type: String, 
        required: true
    }, 
    price:{
        type: Number, 
        required: true
    },
    countInStock:{
        type: Number,
        required: true
    },
    brand:{
        type: String,
        required: true
    }, 
    rating:{
        type: Number, 
        required: true
    }, 
    numReviews:{
        type: Number, 
        required: true
    },
    description:{
        type: String,
        required: true
    }
},{
    timestamps: true 
}); 

const Product = Mongoose.model('Product', productSchema); 

export default Product; 