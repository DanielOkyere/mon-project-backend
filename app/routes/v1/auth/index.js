import { Router } from 'express';
import UserController from '../../../controllers/user/user.controller';
import PropertyController from '../../../controllers/user/property.controller';
const {
  createProperty
} = PropertyController;
const {
  createUser
} = UserController;
const router = Router();
router.post('/upload', createProperty);
router.post('/signup', createUser);
router.get('/', (req, res) => res.send('Hello World!'));
export default router;
