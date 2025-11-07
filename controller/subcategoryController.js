import '../model/connection.js';
import subcategorySchemaModel from '../model/subcategorymodel.js';
import url from 'url';
import path from 'path';
const __dirname = url.fileURLToPath(new URL('.',import.meta.url));

export const save =async(req,res)=>{
  var subcategoryList =await subcategorySchemaModel.find();
     var len=subcategoryList.length;
     var _id = (len==0)?1 : subcategoryList[len-1]._id+1;
     const subcaticon = req.files.subcaticon;
     const filename = subcaticon.name;
 
     const fileuploadpath=path.join(__dirname,"../../myproject/public/assets/upload/subcaticon",filename);
     subcaticon.mv(fileuploadpath);
       var  subcategoryDetail = {...req.body,"_id":_id,"info":Date() ,"subcaticon":filename};
           
    console.log(subcategoryDetail);
    try
    {
     var subcategory = await subcategorySchemaModel.create(subcategoryDetail);
    
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
         var cat = await subcategorySchemaModel.find(cate_obj);

         if(cat.length!=0)
         {
          var catlist = await subcategorySchemaModel.find(cate_obj)
          res.status(201).json(catlist);
         }
         else
         {
          res.status(501).json({"msg":"resoruse code"})
         }
}

export const update = async (req,res)=>{

   var user = await subcategorySchemaModel.find(JSON.parse(req.body.cate_obj));
    if(user.length!=0)
    {
      var update_user = await subcategorySchemaModel.updateOne(JSON.parse(req.body.cate_obj),{$set:JSON.parse(req.body.content_obj)});
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

