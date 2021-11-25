module.exports = (req, res, next) => {
  try {
    const user = req.user.data;
    if(!user.admin) return res.status(403).json({
      error: {
        message: 'Restricted access'
      }
    });
    next();
  } catch(e) {
    next(e);
  }
};
