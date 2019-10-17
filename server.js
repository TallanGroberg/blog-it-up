const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 4444
const secret = process.env.SECRET || 'super secrete thing'


require("dotenv").config();

//text if this works 

app.use(express.json())
app.use('/api', expressJwt({secret: process.env.SECRET}))
app.use(morgan('dev'))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/blogitupdb', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
}, console.log('db connected...'))

//Routes 

app.use('/api/blog', require('./routes/blogRouter.js'))
app.use('/user', require('./routes/signUpRouter.js'))
app.use('/auth', require('./routes/userRouter.js'))

app.use( (err,req,res,next) => {
  console.log(err)
  err.name ? res.status(err.status) : null
  res.send({errMsg: err.message})
})

app.listen(PORT, () => {
  console.log(`live! on ${PORT}`)
})

