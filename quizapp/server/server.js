const app = require('express')()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')

//Enable CORS
app.use(cors( {origin: '*' }))

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//Enable Helmet
app.use(helmet())

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server running on port ${port}`))