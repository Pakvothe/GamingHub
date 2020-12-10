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
                notEmpty: true,
                len: [2, 25]
            }
        }
    }, {
        hooks: {
            beforeValidate: (category) => {
                category.name_en = category.name_en.toLowerCase();
                category.name_es = category.name_es.toLowerCase();
            }
        }
    })
}