import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";


const productSchema = mongoose.Schema({
    _id:Number,
    productnm:{
        type:String,
        require:[true,'product name is required'],
        trim:true,
        lowercase:true
    },
    catnm:{
        type:String,
        require:[true,'product name is required'],
        trim:true,
        lowercase:true
    },
    subcatgorynm :{
        type:String,
        require:[true,'product icon icon is required'],
        trim:true,
        lowercase:true
    },
    description:{
        type:String,
        require:[true,'product  name is required'],
        trim:true,
        lowercase:true
    },
    address:{
        type:String,
        require:[true,'product price name is required'],
        trim:true,
        lowercase:true
    },
    bidprice:{
        type:String,
        require:[true,'product price name is required'],
        trim:true,
        lowercase:true
    },
    city:{
        type:String,
        require:[true,'product price name is required'],
        trim:true,
        lowercase:true
    },
    date:{
        type:String,
        require:[true,'product price name is required'],
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        require:[true,'product price name is required'],
        trim:true,
        lowercase:true
    },
    bidvalue:{
        type:String,
        require:[true,'product price name is required'],
        trim:true,
        lowercase:true
    },
    producticon:{
        type:String,
        require:[true,'product price name is required'],
        trim:true,
        lowercase:true
    },
    customeremail:String,
    role:String,
    status:Number,
    info:String
});

mongoose.plugin(mongooseUniqueValidator);

const productSchemaModel = mongoose.model('add_productcollection',productSchema);

export default productSchemaModel;