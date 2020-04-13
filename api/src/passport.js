const LocalStrategy = require('passport-local').Strategy;
const userRepository = require('./repositories/users');

module.exports = function(passport) {
    passport.use(
        'local',
        new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true
            },
            async function(req, email, password, done) {
                const user = await userRepository.getUserByEmail(email);
                if(!user) {
                    return done(null, false, {
                        status: 400,
                        massage: 'Incorrect email or password',
                        success: false
                    });
                }

                if(!user.validatePassword(password, user.password)) {
                    return done(null, false, {
                        status: 400,
                        massage: 'Incorrect email or password',
                        success: false
                    });
                }
                return done(null, user);
            }
        )
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        const user = await userRepository.getUser(id);
        done(null, user);
    });
};