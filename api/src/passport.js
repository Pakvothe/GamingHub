const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const BearerStrategy = require("passport-http-bearer").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const { User } = require("./db.js");
const jwt = require("jsonwebtoken");
const { SECRET, DB_HOST, PORT, CLIENTID, CLIENTSECRET, FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } = process.env;

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
				updatedAt
			} = user;
			return done(null, {
				id,
				first_name,
				last_name,
				email: userEmail,
				is_admin,
				updatedAt
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

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});

passport.use(new GoogleStrategy({
	clientID: CLIENTID,
	clientSecret: CLIENTSECRET,
	callbackURL: `http://${DB_HOST}:${PORT}/auth/googleCallback`
}, async function (accessToken, refreshToken, profile, done) {
	try {
		const foundUser = await User.findOne({ where: { googleId: profile.id } })
		if (foundUser) done(null, foundUser)
		else {
			const user = {
				first_name: profile.name.givenName,
				last_name: profile.name.familyName,
				email: profile.emails[0].value,
				is_admin: false,
				googleId: profile.id
			}
			const createdUser = await User.create(user)
			done(null, createdUser)
		}
	} catch (err) {
		done(err, null)
	}
}));

//FACEBOOK

passport.use(
	new FacebookStrategy({
		clientID: FACEBOOK_APP_ID,
		clientSecret: FACEBOOK_APP_SECRET,
		callbackURL: `http://${DB_HOST}:${PORT}/auth/facebookCallback`,
		profileFields: ['id', 'emails', 'name']
	}, async function (accessToken, refreshToken, profile, done) {
		try {
			const foundUser = await User.findOne({ where: { facebookId: profile.id } })
			if (foundUser) done(null, foundUser)
			else {
				const user = {
					first_name: profile.name.givenName,
					last_name: profile.name.familyName,
					email: profile.emails[0].value,
					is_admin: false,
					facebookId: profile.id
				}
				const createdUser = await User.create(user)
				done(null, createdUser)
			}
		} catch (err) {
			done(err, null)
		}
	}));

module.exports = passport;