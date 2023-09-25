const express = require('express')
const app = express();

//Connection to db
const connectToMongo = require('./db')
require('dotenv/config')
connectToMongo();

//middleware to show res body
app.use(express.json())

//routes
app.use('/user', require('./routes/user'))
app.use('/recipes', require('./routes/recipes'))
app.get('/', (req, res)=>{
    res.send('hello')
})

const port = 5000;
app.listen(port, ()=>{
    console.log(`Backend port is ${port} ${process.env.REACT_APP_MONGOOSEURI}`)
})