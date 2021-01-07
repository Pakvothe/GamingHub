const server = require("express").Router();
const { User } = require("../db.js");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

server.get("/me", async (req, res, next) => {
	try {
		if (req.user) {
			const { id } = req.user;
			const result = await User.findByPk(id, { attributes: { exclude: ['password'] } });
			if (req.user.updatedAt === result.updatedAt.toISOString()) {
				return res.json(result);
			} else {
				const { id, first_name, last_name, email, is_admin, updatedAt } = result;
				result.dataValues.jwt = jwt.sign(
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
				return res.json(result)
			}
		} else res.sendStatus(401);
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
		res.sendStatus(500).send(error);
	}
});

server.post("/login", function (req, res, next) {
	passport.authenticate("local", function (err, user) {
		if (err) return next(err);
		else if (!user) return res.sendStatus(401);
		else return res.send(jwt.sign(user, SECRET));
	})(req, res, next);
});

module.exports = server;