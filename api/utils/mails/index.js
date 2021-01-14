const { sendMail } = require('../functions.js');
const pug = require('pug');
const path = require('path');
const { FRONT } = process.env;

const mailOrderCompleted = async (data, serials) => {
	const language = data.language;
	const strings = {
		en: {
			subject: 'Successful purchase - Order number',
			appreciate: 'Thanks for your purchase',
			text: 'Your payment has been processed successfully. Below we attach the serials of each game you bought. Don\'t lose them',
			reviewText: 'Give us a review',
			slogan: 'Press start and you have fun!'
		},
		es: {
			subject: 'Compra realizada con exito - Nº de orden',
			appreciate: 'Gracias por tu compra',
			text: 'Se ha procesado tu pago exitosamente. A continuación adjuntamos los serials de cada juego que compraste. No los pierdas',
			reviewText: 'Dejar una reseña',
			slogan: 'Presiona start y a divertirse!'
		}
	};

	let mailOptions = {
		from: '"Gaming Hub" <soygaminghub@gmail.com>',
		to: data.email,
		subject: `${strings[language].subject} ${data.id}`,
		attachments: [{
			filename: 'logo-dual.png',
			path: __dirname + '/../../src/assets/img/logo-dual.png',
			cid: 'logo'
		}],
		html: pug.renderFile(path.join((__dirname), 'mailOrdersCompleted.pug'), {
			strings: strings[language],
			games: data.products,
			linkReview: `${FRONT}orders/${data.id}`,
			userId: data.userId,
			serials: serials
		}),
	}

	/*Falta manejar error de mail*/
	const mailer = await sendMail(mailOptions)
	/*Falta manejar error de mail*/
}

const mailOrderInProcess = async (data) => {
	const language = data.language;
	const strings = {
		en: {
			subject: 'In process of payment order Nº',
			appreciate: 'Your payment is being processed',
			text: 'If you can\'t see the link, click here below',
			slogan: 'Press start and you have fun!'
		},
		es: {
			subject: 'En proceso de pago orden Nº',
			appreciate: 'Tu pago se esta procesando',
			text: 'Si no puedes visualizar el link haz click aqui debajo',
			slogan: 'Presiona start y a divertirse!'
		}
	};

	let mailOptions = {
		from: '"Gaming Hub" <soygaminghub@gmail.com>',
		to: data.email,
		subject: `${strings[language].subject} ${data.id}`,
		attachments: [{
			filename: 'logo-dual.png',
			path: __dirname + '/../../src/assets/img/logo-dual.png',
			cid: 'logo'
		}],
		html: pug.renderFile(path.join((__dirname), 'mailOrdersInProcess.pug'), {
			strings: strings[language],
			games: data.products,
			payment_link: data.payment_link
		}),
	}

	/*Falta manejar error de mail*/
	const mailer = await sendMail(mailOptions)
	/*Falta manejar error de mail*/
}

module.exports = { mailOrderCompleted, mailOrderInProcess }