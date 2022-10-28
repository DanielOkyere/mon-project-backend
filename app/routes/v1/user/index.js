import { Router } from 'express';
import UserController from '../../../controllers/user/user.controller';

const {
  getUser
} = UserController;
const router = Router();

router.get('/', getUser);

export default router;
