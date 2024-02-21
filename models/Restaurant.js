import { DataTypes , Model  } from "sequelize";
import sequelize from"../app/utils/connect.db.js";

class Restaurant extends Model {}

Restaurant.init(
    {
      
        restaurantName: {
            type:DataTypes.STRING,
            allowNull: false
        },
        adress: {
            type:DataTypes.STRING,
            allowNull: false
        },
        city: {
            type:DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type:DataTypes.STRING,
            allowNull: false
        },
        email: {
            type:DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type:DataTypes.STRING,
            allowNull: false
        },
        owner_id: {
            type:DataTypes.BOOLEAN,
            allowNull: false
        },
        created_at: {
            type:DataTypes.STRING,
            allowNull: false
        },
        updated_at: {
            type:DataTypes.STRING,
            allowNull: false
        },

    },
    {
        sequelize,
        tableName:"restaurant",
    }
);

export default Restaurant