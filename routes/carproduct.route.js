import { getCarProducts } from "../controllers/carProducts.js";
import express from "express";

const router = express.Router();

router.get("/carproduct", getCarProducts);

export default router;
