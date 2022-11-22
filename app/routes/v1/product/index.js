import { Router } from 'express';
import ProductController from '../../../controllers/user/product.controller';

const {
  getProduct, createProduct, updateProduct
} = ProductController;
const router = Router();

router.get('/', getProduct);
router.post('/post', createProduct);
router.put('/update', updateProduct);

export default router;