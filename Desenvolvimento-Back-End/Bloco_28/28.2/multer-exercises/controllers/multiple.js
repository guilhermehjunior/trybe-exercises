const urlList = (files) => {
  const urls = [];
  files.forEach((file) => {
    const url = { file: file.originalname, url: `http://localhost:3000/${file.filename}` };
    urls.push(url);
  });
  return urls;
};

module.exports = (req, res, next) => {
  res.status(200).json(urlList(req.files));
};