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
			type: D.TEXT,
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
					if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/.test(value)) {
						const salt = bcrypt.genSaltSync(10);
						const hash = bcrypt.hashSync(value, salt);
						this.setDataValue('password', hash);
					} else {
						throw new Error('Invalid password');
					}
				} else {
					this.setDataValue('password', null)
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
		if (this.password || this.reset_code) return bcrypt.compareSync(password.toString(), isReset ? this.reset_code : this.password);
		else return false
	}

}