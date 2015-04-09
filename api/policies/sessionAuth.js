/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {

  if (req.session.authenticated) {
      if (!req.user) {
          User.findOne(req.session.passport.user).then(function (user) {
              req.user = user;
              next();
          })
      }
      else {
          return next();
      }
  }
  else {
      return res.redirect('/login');
  }
};
