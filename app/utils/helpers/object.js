const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

class Property extends Model{
getPropertyDetail(){
    return [this.id, this.image, this.title, this.rating, this.features].json('');
}
}
Property.init({
    id :{
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true 
    },
    image :{
        type: DataType.STRING
    },
    title :{
        type: DataType.STRING,
        allowNull: false
    },
rating :{
        type: DataType.FLOAT
    },
    features :{
        type: DataType.STRING
    }
}, {sequelize});
 