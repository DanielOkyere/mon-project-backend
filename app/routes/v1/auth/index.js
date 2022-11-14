import { Router } from 'express';
import UserController from '../../../controllers/user/user.controller';

const {
  createUser
} = UserController;
const router = Router();

router.post('/signup', createUser);
router.get('/', (req, res) => res.send('Hello World!'));
export default router;
