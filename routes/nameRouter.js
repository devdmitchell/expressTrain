const express = require('express')
const router = express.Router()


app.get('/get-all-products', (req, res) => {
    const productNames = store.map(product => product.name)
    res.json({ message: "Product names", payload: productNames })
})

module.exports = router