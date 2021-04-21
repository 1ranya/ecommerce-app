import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv';

dotenv.config()

const app = express();
const port = process.env.PORT || 5000

//allow the use of the req.body 
app.use(express.json()) //parsing json data in the body of the request 
app.use(express.urlencoded({extended:true}))

//connection to mongoDB 
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/shecancode",{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
})

app.get('/', (req, res) => {
    res.send("Server is ready !")
});

app.use("/api/users", userRouter); //Connect the server to userRouter 

app.use('/api/products', productRouter);

app.use((err, req, res, next) => {
    res.status(500).send({message:err.message});
})

app.listen(5000, () => {
    console.log(`Server is listning on port http://localhost:${port}`)
})