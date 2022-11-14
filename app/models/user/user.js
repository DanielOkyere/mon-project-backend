import { DataTypes, Sequelize } from 'sequelize';
import config from '../../../config/env';

const db = new Sequelize(
  config.DATABASE_URL
);
const User = db.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salt: DataTypes.STRING,
  hash: DataTypes.STRING,
  phoneNumber: DataTypes.CHAR(10)
});

(async () => {
  await db.sync({ force: true });
})();
export default User;
