import express from "express";
import catchAsync from "../../core/catchAsync";
import productController from "../../controllers/productController";

const router = express.Router();


router.get('/products',catchAsync(productController.getAllProduct));

export default router;
