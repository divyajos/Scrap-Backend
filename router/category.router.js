import express from 'express';

const router = express.Router();

import * as categoryController from '../controller/categoryController.js';

router.post("/save",categoryController.save);
router.get("/fetch",categoryController.fetch);
router.patch("/update",categoryController.update);
//  router.delete("/delete",categoryController.delete);

export default router;
