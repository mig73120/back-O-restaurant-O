import { DataTypes , Model  } from "sequelize";
import sequelize from"../app/utils/connect.db.js";

class User extends Model {}

User.init(
    {
        userFirstName: {
            type:DataTypes.STRING,
            allowNull: false
        },
        lastname: {
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
        owner: {
            type:DataTypes.BOOLEAN,
            allowNull: false
        },
        password: {
            type:DataTypes.STRING,
            allowNull: false
        },
        profil_picture: {
            type:DataTypes.STRING,
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
        tableName:"user",
    }
);

export default User