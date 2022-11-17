import { Router } from 'express';
import PropertyController from '../../../controllers/user/property.controller';

const {
  createProperty
} = PropertyController;
const router = Router();

router.post('/upload', createProperty);
router.get('/', (req, res) => res.send('Hello World!'));
export default router;