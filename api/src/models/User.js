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
		profile_pic: {
			type: D.STRING,
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
			set(value) {
				if (value) {
					const salt = bcrypt.genSaltSync(10);
					const hash = bcrypt.hashSync(value, salt);
					this.setDataValue('password', hash);
				}
			}
		},
		is_admin: {
			type: D.BOOLEAN,
			allowNull: false
		},
		googleId: {
			type: D.STRING
		},
		facebookId: {
			type: D.STRING
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