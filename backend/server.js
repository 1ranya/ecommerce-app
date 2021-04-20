import express from 'express';
import data from './data.js'
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("Server is ready !")
});

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find( x => x._id ===  req.params.id)
    if(product)
        res.send(product)
    else 
        res.status(404).send({message: "Product is Not Found"})
})

app.get("/api/products", (req, res) => {
    return res.send(data.products)
})
app.listen(5000, () => {
    console.log(`Server is listning on port http://localhost:${port}`)
})