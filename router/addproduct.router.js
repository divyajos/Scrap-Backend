import express from 'express';

const router = express.Router();

import * as productController from '../controller/addproductcontroller.js';

router.post("/save",productController.save);
router.get("/fetch",productController.fetch);
router.patch("/update",productController.update);
//  router.delete("/delete",subcategoryController.delete);

export default router;
