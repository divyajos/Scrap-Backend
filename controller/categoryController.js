import '../model/connection.js';
import categorySchemaModel from '../model/category.model.js';
import url from 'url';
import path from 'path';
const __dirname = url.fileURLToPath(new URL('.',import.meta.url));

export const save =async(req,res)=>{
  var categoryList =await categorySchemaModel.find();
     var len=categoryList.length;
     var _id = (len==0)?1 : categoryList[len-1]._id+1;
     const caticon = req.files.caticon;
     const filename = caticon.name;
 
     const fileuploadpath=path.join(__dirname,"../../myproject/public/assets/upload/caticons",filename);
     caticon.mv(fileuploadpath);
       var  categoryDetail = {...req.body,"_id":_id,"info":Date() ,"caticonnm":filename};
           
    console.log(categoryDetail);
    try
    {
     var category = await categorySchemaModel.create(categoryDetail);
    
    //  console.log(category);

     res.status(201).json({"status":true});
    }
    catch(err)
    {
    
      res.status(500).json({"status":false });
      console.log(err)
    }
}

export const fetch = async(req,res)=>{
      var cate_obj = url.parse(req.url,true).query;
         var cat = await categorySchemaModel.find(cate_obj);

         if(cat.length!=0)
         {
          var catlist = await categorySchemaModel.find(cate_obj)
          res.status(201).json(catlist);
         }
         else
         {
          res.status(501).json({"msg":"resoruse code"})
         }
}

export const update = async (req,res)=>{

   var user = await categorySchemaModel.find(JSON.parse(req.body.cate_obj));
    if(user.length!=0)
    {
      var update_user = await categorySchemaModel.updateOne(JSON.parse(req.body.cate_obj),{$set:JSON.parse(req.body.content_obj)});
      if(update_user)
      {
        res.status(201).json({"msg":"user update successfully"});
      }
      else
      {
        res.status(500).json({"msg":"internal server error"});
      }
    }
    else
    {
      res.status(404).json({"msg":"resourse is not avilable in database"})
    }
}

