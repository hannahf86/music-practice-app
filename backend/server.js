// REQUIRED
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const practiceRoutes = require('./routes/practiceRoutes')
const cors = require('cors')


// APP
const app = express()
app.use(cors(
    {
        origin: ['http://localhost:5173/'],
        methods: ['POST', 'GET'],
        credentials: true
    }
))

    // middleware
    app.use(express.json())

    app.use((req, res, next) => {
        console.log(req.path, req.method)
        next()
    })


// ROUTE HANDLER
app.use('/api/routes/practiceRoutes', practiceRoutes)


// CONNECT TO DB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(process.env.PORT, () => {
        console.log('listening on port', process.env.PORT)
    })
}) .catch((err) => {
    console.log(err)
})