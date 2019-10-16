const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }, 
  password: {
    type: String,
    required: true,
  }
})



userSchema.pre('save', function(next) {
  const user = this
  if(!user.isModified('password')) return next()
  bcrypt.hash(user.password, 10, (err, hash) => {
    if(err) return next(err);
    user.password = hash;
    next() 
  })
})


module.exports = mongoose.model('User', userSchema)