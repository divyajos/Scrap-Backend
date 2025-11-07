import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";


const subcategorySchema = mongoose.Schema({
    _id:Number,
    catnm:{
        type:String,
        require:[true,'category name is required'],
        trim:true,
        lowercase:true
    },
    subcaticon:{
        type:String,
        require:[true,'category icon icon is required'],
        trim:true,
        lowercase:true
    },
    subcatnm:{
        type:String,
        require:[true,'category  name is required'],
        trim:true,
        lowercase:true
    },
    description:{
        type:String,
        require:[true,'category price name is required'],
        trim:true,
        lowercase:true
    },
    
    
    role:String,
    status:Number,
  
    info:String
})

mongoose.plugin(mongooseUniqueValidator);

const subcategorySchemaModel = mongoose.model('subcategory_collection',subcategorySchema);

export default subcategorySchemaModel;