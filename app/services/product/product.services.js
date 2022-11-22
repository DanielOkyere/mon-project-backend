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
    static async createProduct(data) {
      const new_obj = {
        ...data
      };
      const product= Product.create(new_obj);
      return product;
    }
  
    /**
     * getProperty - Fetches property  information from Database
     * @param {Obj} data - Contains property number
     * @returns {Obj} Object of property
     */
    static async getProduct(data) {
      const product = Product.findAll({
        where: {
          id: data
        }
      })
      return product;
    }
        /**
         * updateProperty - updates property information to the Database
          @param {Obj} data - Object containing property details
       * @returns {Obj}
       */
    static async updateProduct(data) {
      const product= Product.update({
        state: 0
      },{
        where: {
          id : data
        }
      })
      return product;
    } 
  }
  
  export default ProductService;