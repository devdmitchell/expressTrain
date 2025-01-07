const express = require('express')
const logger = require('morgan')

const app = express()
app.use(logger('dev'))
app.use(express.json())


let store = [
    { name: 'apple', 
        price: 1.5 
    },
    { name: 'banana', 
        price: 1.0 
    }
]