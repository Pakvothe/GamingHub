const { DataTypes } = require('sequelize');
const D = DataTypes;

module.exports = (sequelize) => {
	// defino el modelo
	const updateStock = (serial) => {
		sequelize.models.Product.count({
			include: [{
				model: sequelize.models.Serial,
				where: {
					productId: serial.productId
				}
			}]
		}).then(count => {
			sequelize.models.Product.update({ stock: count }, {
				where: {
					id: serial.productId
				}
			})
		});
	};

	sequelize.define('serial', {
		serial: {
			type: D.STRING(21),
			allowNull: false,
			unique: true,
			validate: {
				isAlphanumeric: true,
				len: [20]
			}
		}
	}, {
		hooks: {
			afterCreate: updateStock,
			afterDestroy: updateStock,
			//Esta solo sirve para el bulkCreate, mientras todo lo hardcodeado
			//esté bien no hará falta en un futuro
			afterBulkCreate: (serials) => {
				serials.map(updateStock)
			},
		}
	})
};