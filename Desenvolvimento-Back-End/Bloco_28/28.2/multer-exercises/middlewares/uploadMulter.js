const multer = require('multer');
const fs = require('fs');

const duplicate = (filename) => {
  const files = fs.readdirSync('./uploads');
  return files.some((file) => file.includes(filename));
};

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'uploads');
  },
  filename: (_req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, callback) => {
  // const nameArray = file.originalname.split('.');
  // const fileType = nameArray[nameArray.length - 1];
  if (file.mimetype !== 'image/png') {
    req.fileValidationError = true;
    return callback(null, false);
  }

  if(duplicate(file.originalname)) {
    req.alreadyExists = true;
    return callback(null, false);
  }
  
  return callback (null, true);
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
