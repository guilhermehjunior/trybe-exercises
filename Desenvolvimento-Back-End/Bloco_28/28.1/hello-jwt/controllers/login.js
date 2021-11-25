const loginService = require('../services/login');

module.exports = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const { token, error } = await loginService(username, password);
    if(error) return res.status(404).json(error);
    res.status(200).json({token});
  } catch(e) {
    next(e);
  }
};