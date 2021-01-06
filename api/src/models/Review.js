const { DataTypes } = require('sequelize');
const D = DataTypes;
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	const updateScore = (review) => {
		sequelize.models.Review.findAll({
			where: { productId: review.productId }
		})
			.then(productReviews => {
				let average = productReviews.reduce((acc, prod) => acc + prod.score, 0) / productReviews.length;
				sequelize.models.Product.update({ score: average }, {
					where: {
						id: review.productId
					}
				})
			});
	};

	const Review = sequelize.define('review', {
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
	}, {
		hooks: {
			afterCreate: updateScore,
			afterUpdate: updateScore,
			afterDestroy: updateScore,
		}
	});
}