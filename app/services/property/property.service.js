import Property from '../../models/user/property';
/**
 * @Class PropertyService
 * Defines all methods and properties of property
 */
 class PropertyService {
    /**
       * insertUser - Inserts a new property into database
       * @param {Obj} data - Object containing property details
       * @returns {Obj}
       */
    static async insertProperty(data) {
      const new_obj = {
        ...data
      };
      const property= Property.create(new_obj);
      return property;
    }
  
    /**
     * getProperty - Fetches property  information from Database
     * @param {Obj} data - Contains property number
     * @returns Object of property
     */
    static async getProperty(data) {
      const property = Property.findAll({
        where: {
          id: data
        }
      });
      return property;
    }
  }
  
  export default PropertyService;
  