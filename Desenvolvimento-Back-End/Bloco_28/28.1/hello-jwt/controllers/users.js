module.exports = (req, res, next) => {
  const user = req.user.data;
  res.status(200).json(user);
};
