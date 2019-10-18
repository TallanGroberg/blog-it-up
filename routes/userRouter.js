const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')
const jwt = require("jsonwebtoken");


const handleRequest = (err,req,res,next, arg) => err ? res.status(500).next(err) : res.status(200).send(arg)
const dataBaseChange = (err,req,res,next,arg) =>  err ? res.status(500).next(err) : res.status(201).send(arg)

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
  User.findByIdAndUpdate(req.params._id, req.body, {new: true}, (err, user) => {
    if(user.editPassword)

    user = user.editPassword()
    dataBaseChange(err,req,res,next,user)
   
  })
})




module.exports = userRouter