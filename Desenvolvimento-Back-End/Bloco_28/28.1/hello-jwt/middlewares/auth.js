const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if(!authorization) return res.status(401).json({ error: 'Token nao encontrado' });
    const decode = jwt.verify(authorization, JWT_SECRET);
    req.user = decode;
    next();
  } catch (e) {
    e.statusCode = 401;
    next(e);
  }
};
