module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const regex = /\w{12}/;
  if (!regex.test(authorization)) return res.status(400).json({ "message": "invalid data" });
  next();
};