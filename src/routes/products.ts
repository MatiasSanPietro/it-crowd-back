import { Router } from "express";
import {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductsById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;

// http://localhost:3001/api/products/ http://localhost:3001/api/products/?name= http://localhost:3001/api/products/?description=
