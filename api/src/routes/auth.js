const server = require("express").Router();
const { User } = require("../db.js");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const { isAuthenticated, isAdmin } = require('../../utils/customMiddlewares');

server.get("/me", isAuthenticated, async (req, res, next) => {
	try {
		const { id } = req.user;
		const result = await User.findByPk(id, {
			attributes: ['id', 'first_name', 'last_name', 'profile_pic', 'email', 'is_admin', 'updatedAt']
		});
		if (req.user.updatedAt === result.updatedAt.toISOString()) {
			return res.json(result);
		} else {
			const { id, first_name, last_name, profile_pic, email, is_admin, updatedAt } = result;
			result.dataValues.jwt = jwt.sign(
				{
					id,
					first_name,
					last_name,
					profile_pic,
					email,
					is_admin,
					updatedAt
				},
				SECRET
			)
			return res.json(result)
		}
	} catch (error) {
		next(error);
	}
});

server.post("/register", async function (req, res, next) {
	try {
		const user = await User.create(req.body);
		const { id, first_name, last_name, email, is_admin, updatedAt } = user;
		return res.send(
			jwt.sign(
				{
					id,
					first_name,
					last_name,
					email,
					is_admin,
					updatedAt
				},
				SECRET
			)
		);
	} catch (error) {
		if (error.message === 'Invalid password')
			return res.status(400).json({ message: 'Invalid password' });
		if (error.errors[0]?.message === 'email must be unique')
			return res.status(400).json({ message: 'email must be unique' });
		return res.status(500).json({ message: 'Internal Server Error' });
	}
});

server.post("/login", function (req, res, next) {
	passport.authenticate("local", function (err, user) {
		if (err) return next(err);
		else if (!user) return res.sendStatus(401);
		else return res.send(jwt.sign(user, SECRET));
	})(req, res, next);
});

server.get("/google", passport.authenticate('google', {
	scope: ['profile', 'email']
}));

server.get('/googleCallback',
	passport.authenticate('google'),
	function (req, res) {
		const { id, first_name, last_name, profile_pic, email, is_admin, updatedAt } = req.user.dataValues;
		const token = jwt.sign(
			{
				id,
				first_name,
				last_name,
				profile_pic,
				email,
				is_admin,
				updatedAt
			},
			SECRET
		)
		res.redirect(`${process.env.FRONT}?jwt=${token}`);
	});

server.get("/facebook", passport.authenticate('facebook', {
	scope: ['email', 'user_photos']
}));

server.get('/facebookCallback',
	passport.authenticate('facebook'),
	function (req, res) {
		const { id, first_name, last_name, profile_pic, email, is_admin, updatedAt } = req.user.dataValues;
		const token = jwt.sign(
			{
				id,
				first_name,
				last_name,
				profile_pic,
				email,
				is_admin,
				updatedAt
			},
			SECRET
		)
		res.redirect(`${process.env.FRONT}?jwt=${token}`);
	});

module.exports = server;