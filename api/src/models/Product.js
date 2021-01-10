const { DataTypes } = require('sequelize');
const D = DataTypes;
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('product', {
		name: {
			type: D.STRING,
			allowNull: false,
		},
		stock: {
			type: D.INTEGER,
			defaultValue: 0,
			allowNull: false
		},
		description_es: {
			type: D.TEXT,
			allowNull: false
		},
		description_en: {
			type: D.TEXT,
			allowNull: false
		},
		price: {
			type: D.REAL,
			allowNull: false
		},
		score: {
			type: D.REAL,
			defaultValue: 0,
			allowNull: false
		},
		sales: {
			type: D.INTEGER,
			defaultValue: 0,
			allowNull: false
		},
		is_active: {
			type: D.BOOLEAN,
			allowNull: false
		},
		realPrice: {
			type: D.REAL,
		}
	});
};
