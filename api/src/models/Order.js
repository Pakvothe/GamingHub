const { DataTypes } = require('sequelize');
const D = DataTypes;

module.exports = (sequelize) => {
	sequelize.define('order', {
		email: {
			type: D.STRING,
			unique: true,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		total_amount: {
			type: D.REAL,
			unique: true,
			allowNull: false,
			validate: {
				isNumeric: true
			}
		},
		state: {
			type: D.ENUM('created', 'processing', 'completed', 'canceled'),
			unique: true,
			allowNull: false
		},
		payment_method: {
			type: D.ENUM('cash', 'cc', 'mp'),
			unique: true,
			allowNull: false
		}
	})
}