const multer = require('multer');

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'uploads');
  },
  filename: (_req, file, callback) => {
    callback(null, `${Date.now()}-${file.filename}`)
  },
});

const upload = multer({ storage });

module.exports = (fieldName) => upload.single(fieldName);
