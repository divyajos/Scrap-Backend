import express from 'express';

const router = express.Router();

// to link controller in router file
 import * as userController from '../controller/user.controller.js';

 router.post("/save",userController.save);
 router.get("/fetch",userController.fetch);
 router.patch("/update",userController.update);
 router.delete("/delete",userController.deleteuser);
 router.post("/login",userController.login);

 export default router;

