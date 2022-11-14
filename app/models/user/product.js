import { DataTypes, Sequelize } from 'sequelize';
import config from '../../../config/env';

const db = new Sequelize(
  config.DATABASE_URL
);
const Product = db.define('Product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  Image:{
    type: DataTypes.STRING,
    allowNull: false
  },
 title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rating:{
    type: DataTypes.STRING,
    allowNull:false
 },
 feature: {
    type: DataTypes.STRING,
    allowNull: false
 },

 price:{
    type: DataTypes.STRING,/*When i tried changing it to number they gave me an error*/
    allowNull: false
 }
  
});

(async () => {
  await db.sync({ force: true });
})();
export default Product;
