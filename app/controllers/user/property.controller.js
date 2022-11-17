import PropertyService from '../../services/product/property.service';
import GenericHelper from '../../utils/helpers/generic';

const {
  successResponse,
  errorResponse
} = GenericHelper;

const {
  insertProperty,
  getProperty
} = PropertyService;
/**
 * @Class PropertyController
 * Defines all methods and properties for property Model
 */
class PropertyController {
  /**
     * CreateProperty - Handles request for creating a new Property
     * @param {Obj} req - Request Object
     * @param {Obj} res - Response Object
     * @memberof PropertyController
     * @return {data | Error} - Data or Error Message
     */
  static async createProperty(req, res) {
    try {
      const result = await insertProperty({ ...req.body });
      successResponse(res, {
        data: result,
        message: 'Added property successfully',
        code: 201
      });
    } catch (err) {
      errorResponse(req, res, {
        message: 'Failed'
      });
    }
  }

  /**
   * getProperty - Handles the reguest for getting property
   * @param {Obj} req - Request object
   * @param {Obj} res - Response Object
   * @return {Data | Error}
   */
  static async getProperty(req, res) {
    try {
      const user = await getProperty(req.query.id);
      successResponse(res, {
        data: user,
        message: 'Property Retrieved Successfully'
      });
    } catch (err) {
      errorResponse(req, res, {
        message: 'Failed to retrieve property'
      });
    }
  }
}

export default PropertyController;
