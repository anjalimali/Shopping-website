
require('dotenv/config')
const productroute = require('./routes/productRoute')
const userroute = require('./routes/userRoute')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const app = express()

//middleware
app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
    res.send("this is home")
})

// main route
app.use('/api/user',userroute)
app.use('/api/product',productroute)

app.listen(process.env.PORT, () => {
    console.log("listing on port 5000");
})

async function main() {
    try {
        const res = mongoose.connect(process.env.DB)
        const data = (await res).default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}

main()