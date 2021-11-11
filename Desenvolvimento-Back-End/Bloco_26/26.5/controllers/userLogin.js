module.exports = (_req, res, next) => {
  const token = "86567349784e";
  res.status(200).json({ token });
  next();
};