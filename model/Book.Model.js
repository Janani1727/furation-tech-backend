const mongoose=require('mongoose');

const bookSchema= mongoose.Schema({
    
    name:String,
    image:String,
    price:Number,
    author:String,
    rating:Number,
    description:String,
    genre:String,
    year:Number,
    booknow:{
        type:Boolean,
        default:false
    }
})

const BookModel = mongoose.model("book",bookSchema)

module.exports = {BookModel}