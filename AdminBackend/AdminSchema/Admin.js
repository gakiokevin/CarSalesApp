const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    Make:{
        type:String
    },
    Model:{
        type:String
    },
    Year:{
        type:Number
    },
    Price:{
        type:Number
    },
    Mileage:{
        type:Number
    },
    Image:{
        type:String
    }
})
module.exports = mongoose.model('Admin',adminSchema)