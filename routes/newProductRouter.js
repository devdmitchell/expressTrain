const express = require('express')
const router = express.Router()

app.post('/create-product', (req, res) => {
    const { name, price } = req.body;

    // const productExists = store.some(product => product.name === name);
    // if (productExists) {
    //     return res.json({
    //         message: "Error",
    //         error: `Product '${name}' already exists.`
    //     });
    // }

    const newProduct = { name, price }
    store.push(newProduct)

    res.json({
        message: "Product added",
        payload: newProduct
    });
});


module.exports = router