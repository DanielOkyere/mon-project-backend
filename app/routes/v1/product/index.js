import { Router } from 'express';
import PropertyController from '../../../controllers/user/property.controller';

const {
  getProperty,
} = PropertyController;
const router = Router();
router.get('/', getProperty);

export default router;