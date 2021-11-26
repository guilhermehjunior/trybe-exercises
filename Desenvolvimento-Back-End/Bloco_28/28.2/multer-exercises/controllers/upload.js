module.exports = (req, res, next) => {
  try {
    if (req.fileValidationError) return res.status(403).json({ error: { message: 'Extension must be `png`' } });
    if (req.alreadyExists) return res.status(409).json({ error: { message: 'File already exists' } });
    res.status(201).json({ file: req.file });
  } catch (e) {
    next(e);
  }
};
