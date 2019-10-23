const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    date: {
        type: Date
      },
    comment: {
        type: String
      }
})
module.exports = mongoose.model('Comment', commentSchema)