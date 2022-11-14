import Product from '../../models/user/product';
/**
 * @Class ProductService
 * Defines all methods and properties of property
 */
 class ProductService {
    /**
       * insertUser - Inserts a new property into database
       * @param {Obj} data - Object containing property details
       * @returns {Obj}
       */
    static async insertProduct(data) {
      const new_obj = {
        ...data
      };
      const product= Product.create(new_obj);
      return product;
    }
  
    /**
     * getProperty - Fetches property  information from Database
     * @param {Obj} data - Contains property number
     * @returns Object of property
     */
    static async getProperty(data) {
      const product = Product.findAll({
        where: {
          id: data
        }
      });
      return product;
    }
  }
  
  export default ProductService;