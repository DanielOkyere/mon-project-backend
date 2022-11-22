import { Router } from 'express';
import authRoutes from './auth';
import userRoutes from './user';
import productRoutes from './product';

const router = Router();

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/product', productRoutes);


export default router;
