const express = require('express')
const commentRouter = express.Router()
const commentPost = require('../models/commentPost.js')


// set up a comment system with commentRouter.get("/:comment", (req,res,next) => Coment.find({comment: req.param.comment}))


const handleRequest = (err,req,res,next,arg) => err ? res.status(500).next(err) : res.status(200).send(arg)
const dataBaseChange = (err,req,res,next,arg) =>  err ? res.status(500).next(err) : res.status(201).send(arg)

commentRouter.get('/', (req,res,next) => {
  commentPost.find({user: req.user._id, }, (err,commentPosts) => {
    handleRequest(err,req,res,next,commentPosts)
  })
})

commentRouter.post('/', (req,res,next) => {
  
  const newcommentPost = new commentPost(req.body)
  
  newcommentPost.user = req.user._id
  newcommentPost.save( (err, commentPost) => {
    dataBaseChange(err,req,res,next,commentPost)
    
  })
})

// to find any commentPost including ones you didnt make
commentRouter.get('/:_id', (req,res,next) => {
  commentPost.findById({_id: req.params._id, user: req.user._id}, (err, commentPost) => {
    handleRequest(err,req,res,next,commentPost)
  })
})

commentRouter.put('/:_id', (req,res,next) => {
  commentPost.findOneAndUpdate({_id: req.params._id, user: req.user._id},
    req.body, {new: true}, (err,commentPost) => {
      dataBaseChange(err,res,res,next,commentPost)
    })
})

commentRouter.delete('/:_id', (req,res,next) => {
  commentPost.findOneAndDelete({_id: req.params._id, user: req.user._id}, 
    (err, commentPost) => {
      dataBaseChange(err,req,res,next,commentPost)
    })
})


module.exports = commentRouter