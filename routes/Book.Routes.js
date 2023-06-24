const express=require("express");

const bookRouter= express.Router()

const {bookModel} =require("../model/Book.Model")

bookRouter.post("/addbook",async(req,res)=>{

    const payload=req.body

    // console.log(payload)

    const post = new bookModel(payload)

    await post.save()

    res.send({"msg":"book added"})

})

bookRouter.get("/get",async(req,res)=>{

    const book=await bookModel.find()
    res.send(book)
})






// bookRouter.get("/appointments/:category",async(req,res)=>{
//     const getData=await bookModel.find()
    
//     return res.send(getData.filter((el)=>el.specialization===req.params.category))
// })
// bookRouter.get("/appointments/name/:query",async(req,res)=>{
//     const getData=await bookModel.find()
    
//     return res.send(getData.find((el)=>el.name===req.params.query))
// })
// bookRouter.get("/appointments/page/:page",async(req,res)=>{
//     const getData=await bookModel.find()
//     const limit=4
//         res.send(getData.splice((limit*req.params.page)-limit,limit*req.params.page))
// })


module.exports={bookRouter}
