const loginService = require('../services/login');

module.exports = (req, res, next) => {
  try {
    const { username, password } = req.body;
    const { token, error } = loginService(username, password);
    if(error) res.status(404).json(error);
    res.status(200).json({token});
  } catch(e) {
    next(e);
  }
};