/**
 * @todo Test custom blueprint https://github.com/balderdashy/sails/pull/1934
 *
 */
module.exports = function(req, res, next) {
  if (req.options.user) {
    return next();
  }

  if (req.session.user === req.param('user')) {
    next();
  }

  return res.forbidden('You are not permitted to perform this action.');
};
