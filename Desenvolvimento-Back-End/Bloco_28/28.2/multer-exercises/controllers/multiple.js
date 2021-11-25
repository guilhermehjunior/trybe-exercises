const urlList = (files) => {
  const urls = files.map((file) => ({ file: file.originalname, url: `http://localhost:3000/${file.filename}` }));
  return urls;
};

module.exports = (req, res, next) => {
  res.status(200).json(urlList(req.files));
};