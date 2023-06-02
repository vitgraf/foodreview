import { BelongsTo, Sequelize } from "sequelize";
import connection from "../config/db.js";
import User from "./User.js";
import Restaurant from "./Restaurant.js";

const Review = connection.define(
    'review',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model:'users',
                key: 'id'
            },
            foreingKey: true
        },
        idRestaurant: {
            type: Sequelize.INTEGER,
            allowNull: false,
            foreingKey: true
        },
        comment: {
            type: Sequelize.STRING,
            allowNull: false
        },
        stars: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    }


);

Review.belongsTo(Restaurant, {
    foreingKey: 'idRestaurant'
});

Review.belongsTo(User, {
    foreingKey: 'idUser'
});


export default Review; 