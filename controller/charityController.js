// import '../model/connection.js';
// import productSchemaModel from '../model/product.model.js';
// import url from 'url';



// export const save = async(req,res)=>{
// var charitylist = await charitySchemaModel.find();
// var len=charitylist.length;
// var  _id = (len==0)?1 : charitylist[len-1]._id+1;
// var charityDetails = req.body;
//  charityDetails ={...charityDetails,"_id":_id,"role":"product","status":0,"info":Date()};

//  try
//    {
//     var charity =await charitySchemaModel.create(charityDetails);
//     res.status(201).json({"status":true});
//     }
// catch(err)
//   {
//    res.status(500).json({"status":false,"error":err});
//   }
// }
