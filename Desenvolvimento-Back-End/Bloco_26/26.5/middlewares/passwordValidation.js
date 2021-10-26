module.exports = (req, res, next) => {
  const { password } = req.body;
  const regex = /[0-9]{4,8}/;
  if (!regex.test(password)) return res.status(400).json({ "message": "invalid data" });
  next();
};
