import User from '../../models/user/user';
import AuthHelper from '../../utils/helpers/auth';

const {
  hashString
} = AuthHelper;

/**
 * @Class UserService
 * Defines all methods and properties of User
 */
class UserService {
  /**
     * insertUser - Inserts a new user into database
     * @param {Obj} data - Object containing user details
     * @returns {Obj}
     */
  static async insertUser(data) {
    const { password } = data;
    const new_pas_data = await hashString('text', password);
    const new_obj = {
      salt: new_pas_data.salt,
      hash: new_pas_data.hash,
      ...data
    };
    const user = User.create(new_obj);
    return user;
  }

  /**
   * getUser - Fetches user information from Database
   * @param {Obj} data - Contains User email string
   * @returns Object of User
   */
  static async getUser(data) {
    const user = User.findAll({
      where: {
        email: data
      }
    });
    return user;
  }
}

export default UserService;
