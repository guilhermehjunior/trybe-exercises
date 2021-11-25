module.exports = (_req, res, next) => {
  try {
    res.status(200).json({ secretInfo: 'Peter Park is Spider-man' });
  } catch (e) {
    next(e);
  }
};
