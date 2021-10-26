module.exports = (_req, res, next) => {
  res.status(201).json({ "message": "user created" });
  next();
};
