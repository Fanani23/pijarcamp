import express from "express";
import {
    getProducts, 
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/ProductController.js";

const router = express.Router();

router.get('/produk', getProducts);
router.get('/produk/:id', getProductById);
router.post('/produk', createProduct);
router.patch('/produk/:id', updateProduct);
router.delete('/produk/:id', deleteProduct);

export default router;