module.exports = (req, res, next) => {
  const { country } = req.body;

  if(country.length <= 3) return res.status(400).json({ "message": "invalid data" });
  next();
};