const express = require('express')
const mongoose= require('mongoose')
const multer = require('multer')
const cors = require('cors')
require('dotenv').config()
const app = express();
//setting up some Middlewares
app.use(express.json())
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))
//connecting to MongoDB
mongoose.connect(process.env.Connection_String).then(()=>{
    console.log('Connected Successfully to MongoDatabase')
    app.listen(3000,console.log('Server running on port 3000'))
})

//Setting Up the API'S
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/")
    },
    filename:function(req,file,cb){
        const now = Date.now();
        cb(null, now + file.originalname)
    }
})
const Admin = require('./AdminSchema/Admin')
const upload=multer({storage:storage});

app.post('/register-cars',upload.single("image"),async(req,res)=>{
   const imagename = req.file.filename
   const {make,mileage,year,price,model} = req.body
  try{
    const uploadDetails = await Admin.create({
        Make:make,
        Model:model,
        Year:year,
        Price:price,
        Mileage:mileage,
        Image:imagename

    })
    if(uploadDetails){
        return res.json(uploadDetails)
    }
  }catch(e){
    res.json({status:e})
  }
 
})