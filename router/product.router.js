import express from 'express';

const router = express.Router();

import * as productController from '../controller/productController.js';

router.post("/save",productController.save);
router.get("/fetch",productController.fetch);

export default router;