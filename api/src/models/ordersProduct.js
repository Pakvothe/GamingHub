const { DataTypes } = require('sequelize');
const D = DataTypes;

module.exports = (sequelize) => {
	sequelize.define('orders_products', {
		unit_price: {
			type: D.REAL,
			unique: true,
			allowNull: false,
			validate: {
				isNumeric: true
			}
		},
		quantity: {
			type: D.INTEGER,
			unique: true,
			allowNull: false,
			validate: {
				isInt: true
			}
		}
	})
}
