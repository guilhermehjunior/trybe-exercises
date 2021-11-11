module.exports = (err, _req, res, next) => {
  res.status(404).json({ message: err.message});
  next();
}