import express from "express";  
import bodyParser from "body-parser";
import cors from 'cors';
import fileUpload from "express-fileupload";
const app = express();

// to link router level middilewere
import userRouter from './router/user.router.js';
import categoryRouter from './router/category.router.js';
import productRouter from './router/addproduct.router.js';
import Gateway from './controller/payment.controller.js';
import subcategoryRouter from './router/subcategory.router.js';




//  to load configuration cors
app.use (cors());

app.use(fileUpload());


// to load configuration of body parser
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({"extended":true}));

 // application level middilewere
 app.use ("/user",userRouter);
 app.use("/category",categoryRouter);
 
 app.use("/category",categoryRouter);
 app.use("/subcategory",subcategoryRouter);
 app.use("/product",productRouter);
 
 
 
 

 app.post("/payment",Gateway);

 app.listen(3002);
 console.log("server listen at link :http://localhost:3002");
