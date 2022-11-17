import { DataTypes, Sequelize } from 'sequelize';
import config from '../../../config/env';

const db = new Sequelize(
  config.DATABASE_URL
);
const Property = db.define('Property', {
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
    type: DataTypes.STRING,
    allowNull: false
 }
  
});

(async () => {
  await db.sync({ force: true });
})();
export default Property;