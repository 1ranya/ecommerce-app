import express from 'express'; 
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import data from '../data.js';

const productRouter = express.Router(); 

productRouter.get('/seed', expressAsyncHandler( async(req, res) =>{
    const createdProduct = await Product.insertMany(data.products);
    res.send({createdProduct});
}));

productRouter.get('/',  expressAsyncHandler( async(req, res) =>{
    const products = await Product.find({}); //return all products
    res.send(products);
}));

productRouter.get('/:id', expressAsyncHandler(async (req, res)=>{
    const product = await Product.findById(req.params.id);
    if(product)
        res.send(product);
    else
        res.status(400).send({message:"Product Not Found"});
}));


export default productRouter; 