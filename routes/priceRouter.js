const express = require('express')
const router = express.Router()

app.get('/get-product/:productName', (req, res) => {
    const { productName } = req.params
    const product = store.find(item => item.name === productName)
    res.json({
        message: "Product found",
        payload: product
    })
})


.module.exports = router