const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/blogitupdb', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
}, console.log('db connected...'))

app.use( (err,req,res,next) => {
  console.log(err)
  res.send({errMsg: err.error.message})
})

app.listen(4444, () => {
  console.log(`live! on 4444`)
})

