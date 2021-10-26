module.exports = (req, res, next) => {
  const { initials } = req.body;

  if( initials.length > 3 || initials !== initials.toUpperCase()) return res.status(400).json({ "message": "invalid data" });
  next();
};