import ProductService from '../../services/product/product.services';
import GenericHelper from '../../utils/helpers/generic';

const {
  successResponse,
  errorResponse
} = GenericHelper;

const {
  insertProduct,
  getProduct
} = ProductService;
/**
 * @Class ProductController
 * Defines all methods and properties for product Model
 */
class ProductController {
  /**
     * CreateUser - Handles request for creating a new Product
     * @param {Obj} req - Request Object
     * @param {Obj} res - Response Object
     * @memberof ProductController
     * @return {data | Error} - Data or Error Message
     */
  static async createProduct(req, res) {
    try {
      const result = await insertProduct({ ...req.body });
      successResponse(res, {
        data: result.id,
        message: 'Added product successfully',
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
  static async getProduct(req, res) {
    try {
      const user = await getProduct(req.query.email);
      successResponse(res, {
        data: user,
        message: 'Product Retrieved Successfully'
      });
    } catch (err) {
      errorResponse(req, res, {
        message: 'Failed to retrieve product'
      });
    }
  }
}

export default ProductController;