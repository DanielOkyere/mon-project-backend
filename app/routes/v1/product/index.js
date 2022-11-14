import { Router } from 'express';
import ProductController from '../../../controllers/user/product.controller';

const {
  getProduct, createProduct
} = ProductController;
const router = Router();

router.get('/', getProduct);
router.post('/details', createProduct);

export default router;