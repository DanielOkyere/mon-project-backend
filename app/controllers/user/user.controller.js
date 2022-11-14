import UserService from '../../services/user/user.service';
import GenericHelper from '../../utils/helpers/generic';

const {
  successResponse,
  errorResponse
} = GenericHelper;

const {
  insertUser,
  getUser
} = UserService;
/**
 * @Class UserController
 * Defines all methods and properties for User Model
 */
class UserController {
  /**
     * CreateUser - Handles request for creating a new user
     * @param {Obj} req - Request Object
     * @param {Obj} res - Response Object
     * @memberof UserController
     * @return {data | Error} - Data or Error Message
     */
  static async createUser(req, res) {
    try {
      const result = await insertUser({ ...req.body });
      successResponse(res, {
        data: result.id,
        message: 'Added User successfully',
        code: 201
      });
    } catch (err) {
      errorResponse(req, res, {
        message: 'Failed'
      });
    }
  }

  /**
   * getUser - Handles the reguest for getting User
   * @param {Obj} req - Request object
   * @param {Obj} res - Response Object
   * @return {Data | Error}
   */
  static async getUser(req, res) {
    try {
      const user = await getUser(req.query.email);
      successResponse(res, {
        data: user,
        message: 'User Retrieved Successfully'
      });
    } catch (err) {
      errorResponse(req, res, {
        message: 'Failed to retrieve user'
      });
    }
  }
}

export default UserController;
