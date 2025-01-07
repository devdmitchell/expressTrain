const express = require('express')
const logger = require('morgan')
const productRouter = require('./routes/productRouter')

const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use ('/'. productRouter)
app.use('/get-all-products'. nameRouter)

let store = [
    { name: 'apple', 
        price: 1.5 
    },
    { name: 'banana', 
        price: 1.0 
    }
]



app.listen(3000, ()=>{
    console.log("Express Server Started on port 3000.")
})