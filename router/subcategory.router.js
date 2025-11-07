import express from 'express';

const router = express.Router();

import * as subcategoryController from '../controller/subcategoryController.js';

router.post("/save",subcategoryController.save);
router.get("/fetch",subcategoryController.fetch);
router.patch("/update",subcategoryController.update);
//  router.delete("/delete",subcategoryController.delete);

export default router;
