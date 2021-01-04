const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const BearerStrategy = require("passport-http-bearer").Strategy;
const { User } = require("./db.js");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

passport.use(
	new LocalStrategy(
		{ usernameField: "email", passwordField: "password", session: false },
		async (email, password, done) => {
			const user = await User.findOne({ where: { email: email } });
			if (!user) return done(null, false);
			if (!user.compare(password)) return done(null, false);
			const {
				id,
				first_name,
				last_name,
				email: userEmail,
				is_admin,
			} = user;
			return done(null, {
				id,
				first_name,
				last_name,
				email: userEmail,
				is_admin,
			});
		}
	)
);

passport.use(
	new BearerStrategy((token, done) => {
		jwt.verify(token, SECRET, async function (err, user) {
			if (err) return done(err);
			const response = await User.findByPk(user.id)
			return done(null, response ? user : false);
		});
	})
);

module.exports = passport;