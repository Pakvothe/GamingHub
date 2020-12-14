const { DataTypes } = require('sequelize');
const D = DataTypes;

module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('image', {
		url: {
			type: D.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isUrl: true
			}
		}
	});
};
