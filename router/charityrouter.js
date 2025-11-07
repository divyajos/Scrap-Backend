import express from 'express';

const router = express.Router();

// to link controller in router file
 import * as userController from '../controller/user.controller.js';

 router.post("/save",userController.save);


 export default router;

