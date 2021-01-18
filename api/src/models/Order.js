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
		discount: {
			type: D.INTEGER,
			defaultValue: 0,
			validate: {
				isNumeric: true
			}
		},
		state: {
			type: D.ENUM('created', 'processing', 'completed', 'canceled'),
			defaultValue: 'created',
			allowNull: false
		},
		payment_method: {
			type: D.ENUM('mp', 'paypal'),
			allowNull: false
		},
		mp_id: {
			type: D.STRING,
		},
		paypal_id: {
			type: D.STRING,
		},
		payment_link: {
			type: D.STRING,
			validate: {
				isUrl: true
			}
		},
		language: {
			type: D.STRING,
			defaultValue: 'es'
		},
		exchange: {
			type: D.REAL,
			defaultValue: null
		}
	})
}