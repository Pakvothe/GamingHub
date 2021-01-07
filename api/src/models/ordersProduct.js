const { DataTypes } = require('sequelize');
const D = DataTypes;

module.exports = (sequelize) => {

	const updateSales = (instance) => {
		sequelize.models.Orders_products.findAll({
			where: {
				productId: instance.productId
			}
		})
			.then(sales => {
				let productSales = sales.reduce((acc, sale) => acc + sale.quantity, 0)
				sequelize.models.Product.update({ sales: productSales }, {
					where: { id: instance.productId }
				})
			})
			.catch(err => console.error(err));
	};

	const orderProduct = sequelize.define('orders_products', {
		unit_price: {
			type: D.REAL,
			allowNull: false,
			validate: {
				isNumeric: true
			}
		},
		quantity: {
			type: D.INTEGER,
			allowNull: false,
			validate: {
				isInt: true
			}
		}
	}, {
		hooks: {
			afterCreate: updateSales,
			afterUpdate: updateSales,
			afterDestroy: updateSales,
		}
	})
}
