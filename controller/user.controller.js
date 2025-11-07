import '../model/connection.js'; 
import userSchemaModel from '../model/user.model.js';

import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import { sendMail } from './emailcontroller.js';



export const save = async(req,res)=>{
  var userList =await userSchemaModel.find();
     var len=userList.length;
     var _id = (len==0)?1 : userList[len-1]._id+1;  
     var userDetail = req.body;
     userDetail = {...userDetail,"_id":_id,"role":"user","status":0,"info":Date()};
    try
    {
     var user = await userSchemaModel.create(userDetail);
     sendMail(userDetail.email,userDetail.password);
     res.status(201).json({"status":true});
    }
    catch(err)
    {
      res.status(500).json({"status":false,"error":err});
    }
}


export const fetch = async(req,res)=>{
  var user =await userSchemaModel.find(req.query);

  
  //  if(user);
  // {
  //   res.status(200).json({"user":user});
  // }
  // else
  // {
  //   res.status(404).json({"msg":"resoure code"});
  // }

  
  if(user.length!=0)
  {
    res.status(200).json(user);
  }
  else
  {
    res.status(404).json({"msg":"resoure code"});
  }
}

  export const update =async(req,res)=>{
       var user = await userSchemaModel.findOne(req.body.condition_obj);
       //console.log(user);
       if(user)
       {
          var updated_user = await userSchemaModel.updateOne(req.body.condition_obj,{$set: req.body.content_obj});
            
          if(updated_user)
          {
            res.status(200).json({"msg":"user updated successfully"});
          } 
          else
          {
            res.status(500).json({"msg":"resource not update successfully"});
          }
        }
        else
        {
          res.status(404).json({"msg":"resorse not found in database"})
        }
   }

   export const deleteuser =async (req,res)=>{
      var userDetail = await userSchemaModel.findOne(req.body.condition_obj);
      if(userDetail)
      {
        var delete_user = await userSchemaModel.deleteOne(req.body.condition_obj);
        if(delete_user)
        {
          res.status(200).json({"msg":"user delete is successfully"});
        }
        else
        {
          res.status(500).json({"msg":"user delete is not successfully"});
        }
      }
      else
      {
        res.status(404).json({"msg":"user not found in database"});
      }
   }

   export const login = async (req,res)=>{
    var condition_obj = {...req.body,"status":1};
     var userDetails = await userSchemaModel.find(condition_obj);
  if(userDetails.length!=0)
  {
            
            const payload = userDetails[0].email;
            const key =  rs.generate();
            const token = jwt.sign(payload,key);
            res.status(200).json({"token":token,"userDetails":userDetails[0]});
          }
          else
          {
            res.status(404).json({"msg":"invalid Email or password"});
          }
  }

   

