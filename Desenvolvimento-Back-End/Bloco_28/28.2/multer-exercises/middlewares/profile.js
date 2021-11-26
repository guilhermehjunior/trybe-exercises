const multer = require('multer');

const upload = multer({ dest: 'profilePics'});

module.exports = upload;
