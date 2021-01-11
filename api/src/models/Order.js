const { DataTypes } = require('sequelize');
const D = DataTypes;

module.exports = (sequelize) => {
	sequelize.define('order', {
		email: {
			type: D.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		total_amount: {
			type: D.REAL,
			allowNull: false,
			validate: {
				isNumeric: true
			}
		},
		state: {
			type: D.ENUM('created', 'processing', 'completed', 'canceled'),
			allowNull: false
		},
		payment_method: {
			type: D.ENUM('cash', 'cc', 'mp'),
			allowNull: false
		},
		mp_id: {
			type: D.STRING,
		}
	})
}