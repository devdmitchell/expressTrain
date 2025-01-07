const express = require('express')
const router = express.Router()

app.get('/', (req, res) => {
    res.json({ message: "All products", payload: store });
})

.module.exports = router