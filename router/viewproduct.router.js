import express from 'express';

const router = express.Router();

// to link controller in router file
 import * as viewController from '../controller/user.controller.js';

 router.post("/save",viewController.save);
 router.get("/fetch",viewController.fetch);
 router.patch("/update",viewController.update);
 router.delete("/delete",viewController.deleteuser);
 router.post("/login",viewController.login);

 export default router;