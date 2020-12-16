const { DataTypes } = require('sequelize');
const D = DataTypes;
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
	const hashPassword = async (user, save) => {
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(user.password, salt)
		if (save) user.save();
	};
	const User = sequelize.define('user', {
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
			allowNull: false,
		},
		language: {
			type: D.ENUM('en', 'es'),
			allowNull: false
		},
		is_admin: {
			type: D.BOOLEAN,
			allowNull: false
		}
	}, {
		hooks: {
			beforeCreate: hashPassword,
			beforeUpdate: hashPassword,
			beforeBulkCreate: (users) => users.map((user) => hashPassword(user, "save"))
		}
	})
	User.prototype.validPassword = function (password) {
		return bcrypt.compare(password.toString(), this.password);
	}
}