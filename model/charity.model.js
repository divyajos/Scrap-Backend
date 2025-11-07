import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";


const charitySchema = mongoose.Schema({
    _id:Number,
    name:{
        type:String,
        require:[true,'name is required'],
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        require:[true,'email is required'],
        unique:true,
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        require:[true,'email is required'],
        unique:true,
        trim:true,
        lowercase:true
    },
    
    
    role:String,
    status:Number,
    info:String
})

mongoose.plugin(mongooseUniqueValidator);

const userSchemaModel = mongoose.model('user_collection',userSchema);

export default userSchemaModel;
