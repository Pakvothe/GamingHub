const { DataTypes } = require('sequelize');
const D = DataTypes;

module.exports = (sequelize) => {
	sequelize.define('orders_products', {
		unit_price: {
			type: D.REAL,
			allowNull: false,
			validate: {
				isNumeric: true
			}
		},
		quantity: {
			type: D.INTEGER,
			allowNull: false,
			validate: {
				isInt: true
			}
		}
	})
}
