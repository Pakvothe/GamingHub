const { DataTypes } = require('sequelize');
const D = DataTypes;
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('review', {
		score: {
			type: D.INTEGER,
			allowNull: false,
			defaultValue: 1,
			validate: {
				min: 1,
				max: 5
			}
		},
		description: {
			type: D.TEXT,
			allowNull: true,
			defaultValue: '',
		}
	});
}