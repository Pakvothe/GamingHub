const { DataTypes } = require('sequelize');
const D = DataTypes;

module.exports = (sequelize) => {
	sequelize.define('user', {
		first_name: {
			type: D.STRING,
			allowNull: false
		},
		last_name: {
			type: D.STRING,
			allowNull: false
		},
		username: {
			type: D.STRING,
			allowNull: false,
			unique: true
		},
		email: {
			type: D.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: D.STRING,
			allowNull: false
		},
		language: {
			type: D.ENUM('en', 'es'),
			allowNull: false
		},
		is_admin: {
			type: D.BOOLEAN,
			allowNull: false
		}
	})
}