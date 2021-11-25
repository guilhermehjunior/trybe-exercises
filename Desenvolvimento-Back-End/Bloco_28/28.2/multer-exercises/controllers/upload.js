module.exports = (req, res, next) => {
  try {
    res.status(200).json({ file: req.file });
  } catch (e) {
    next(e);
  }
};
