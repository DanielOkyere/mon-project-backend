import Product from '../../models/user/product';
/**
 * @Class ProductService
 * Defines all methods and properties of property
 */
 class ProductService {
    /**
       * insertProduct - Inserts a new product into database
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
     * getProduct - Fetches product  information from Database
     * @param {Obj} data - Contains product number
     * @returns Object of product
     */
    static async getProduct(data) {
      const product = Product.findAll({
        where: {
          id: data
        }
      });
      return product;
    }
  }
  
  export default ProductService;
