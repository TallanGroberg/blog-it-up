const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')


const handleRequest = (err,req,res,next, arg) => err ? res.status(500).next(err) : res.status(200).send(arg)
const dataBaseChange = (err,req,res,next,arg) => err ? res.status(500).next(err) : res.status(201).send(arg)
   

userRouter.get('/', (req,res,next) => {

  User.find( (err, users) => {
    handleRequest(err,req,res,next,users)
  })
})

userRouter.get('/:_id', (req,res,next) => {
  User.findById(req.params._id, (err,user) => {
    handleRequest(err,req,res,next, user )
  }) 
})

userRouter.delete('/:_id', (req,res,next) => {
  User.findByIdAndDelete(req.params._id, (err,user) => {

    dataBaseChange(err,req,res,next, user)
  })
})

userRouter.put('/:_id', (req,res,next) => {
  const user = req.body

 //1st promise 
  const hashPassword = new Promise((resolve, reject) => {

    bcrypt.hash(user.password, 10, (err, hash) => {
      if(err) return next(err);
      user.password = hash;
      resolve(user.password)
    })
  })
  .then(pass => {
    
    User.findByIdAndUpdate(req.params._id, req.body, {new: true}, (err, user) => {
      console.log('after find and update', user)
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(user)
    })
  })
})




module.exports = userRouter