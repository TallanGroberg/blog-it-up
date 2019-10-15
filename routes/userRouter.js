const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')
const jwt = require("jsonwebtoken");


const handleRequest = (err,req,res, arg) => err ? res.status(500).next(err) : res.status(200).send(arg)
const dataBaseChange = (err,req,res,arg) =>  err ? res.status(500).next(err) : res.status(201).send(arg)

userRouter.get('/', (req,res) => {
  User.find( (err, users) => {
   handleRequest(err,req,res,users)
  })
})

userRouter.get('/:_id', (req,res,next) => {
  User.findById(req.params._id, (err,user) => {
    handleRequest(err,req,res,user )
  }) 
})

userRouter.delete('/:_id', (req,res,next) => {
  User.findByIdAndDelete(req.params._id, (err,user) => {
    dataBaseChange(err,req,res,user)
  })
})

userRouter.put('/:_id', (req,res,next) => {
  User.findByIdAndUpdate(req.params._id, req.body, {new: true}, (err, user) => {
    dataBaseChange(err,req,res,user)
  })
})




module.exports = userRouter