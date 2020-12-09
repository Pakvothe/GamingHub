const { DataTypes } = require('sequelize');
const D = DataTypes;

module.exports = (sequelize) => {
    sequelize.define('category', {
        name_es: {
            type: D.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [2, 25]
            }
        },
        name_en: {
            type: D.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isAlpha: true,
                notEmpty: true,
                len: [2, 25]
            }
        }
    })
}