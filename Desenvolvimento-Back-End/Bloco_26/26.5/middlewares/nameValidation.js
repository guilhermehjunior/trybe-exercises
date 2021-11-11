module.exports = (req, res, next) => {
  const { name } = req.body;

  if( name.length > 3) return res.status(400).json({ "message": "invalid data" });
  next();
};