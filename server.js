const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

require("dotenv").config();

//text if this works 

app.use(express.json())
app.use('/api', expressJwt({secret: process.env.SECRET}))
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/blogitupdb', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
}, console.log('db connected...'))

//Routes 


app.use('/user', require('./routes/signUpRouter.js'))
app.use('/auth', require('./routes/userRouter.js'))

app.use( (err,req,res,next) => {
  console.log(err)
  err.name ? res.status(err.status) : null
  res.send({errMsg: err.message})
})

app.listen(4444, () => {
  console.log(`live! on 4444`)
})

//diana
