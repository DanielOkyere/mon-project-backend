//property table object
const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

class Property extends Model{
getPropertyDetail(){
    return [this.id, this.image, this.title, this.rating, this.features].json('');
}  //get the details of a property
}
Property.init({
    // entity attributes.
    id :{
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true 
    },
    image :{
        type: DataType.STRING
    },
    title :{
        type: DataType.TEXT,
        allowNull: false
    },
rating :{
        type: DataType.FLOAT,
        allowNull: false
    },
    features :{
        type: DataType.TEXT,
        allowNull: false
    }
}, {sequelize});


class ClientTable extends Model{
    getClientDetail(){
        return [this.id, this.firstName, this.lastName, this.telephoneNumber, this.birthday, this.sex, this.clientType].json('');
    }  //get the details of a client
    }
   ClientTable.init({
        // entity attributes.
        client_id :{
            type: DataType.INTEGER,
            autoIncrement: true,
            UNIQUE: true,
            primaryKey: true 
        },
        firstName :{
            type: DataType.STRING,
            allowNull: false
        },
        lastName :{
            type: DataType.STRING,
            allowNull: false
        },
        email :{
            type: DataType.TEXT,
            UNIQUE: true,
            allowNull: false
        },
    telephoneNumber :{
            type: DataType.INTEGER,
            UNIQUE: true,
            allowNull: false
        },
        birthday :{
            type: DataType.DATE,
            allowNull: false
        },
        sex :{
            type: DataType.STRING,
            allowNull: false
        },
        password :{
            type:DataTypes.STRING,
            allowNull: false
        }
    }, {sequelize});
 
