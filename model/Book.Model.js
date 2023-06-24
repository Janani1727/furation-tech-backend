const mongoose=require('mongoose');

const bookSchema= mongoose.Schema({
    
    name:String,
    image:String,
    price:Number,
    author:String,
    rating:Number,
    description:String,
    booknow:{
        type:Boolean,
        default:false
    }
})

const bookModel = mongoose.model("book",bookSchema)

module.exports = {bookModel}