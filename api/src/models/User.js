const { DataTypes } = require('sequelize');
const D = DataTypes;
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
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
			set(value) {
				if (value) {
					const salt = bcrypt.genSaltSync(10);
					const hash = bcrypt.hashSync(value, salt);
					this.setDataValue('password', hash);
				}
			}
		},
		language: {
			type: D.ENUM('en', 'es'),
			allowNull: false
		},
		is_admin: {
			type: D.BOOLEAN,
			allowNull: false
		},
		reset_code: {
			type: D.STRING,
			set(value) {
				if (value) {
					const salt = bcrypt.genSaltSync(10);
					const hash = bcrypt.hashSync(value, salt);
					this.setDataValue('reset_code', hash);
				}
			}
		}
	})

	User.prototype.compare = function (password, isReset) {	//compares resetcode when isReset is true
		return bcrypt.compareSync(password.toString(), isReset ? this.reset_code : this.password);
	}

}