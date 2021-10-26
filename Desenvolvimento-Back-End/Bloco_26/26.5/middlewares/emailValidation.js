module.exports = (req, res, next) => {
  const { email } = req.body;
  const regex = /\w+@\w+\.com/i;
  if (!regex.test(email)) return res.status(400).json({ "message": "invalid data" });
  next();
};
