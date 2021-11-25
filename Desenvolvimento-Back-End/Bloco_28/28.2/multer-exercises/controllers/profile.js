const fs = require('fs').promises;

module.exports = async (req, res, next) => {
  const files = JSON.parse(await fs.readFile('./profiles.json', 'utf-8'));
  const newProfile = { id: req.file.filename, ...req.body, profilePic : req.file.filename };
  files.push(newProfile);
  await fs.writeFile('./profiles.json',JSON.stringify(files));
  res.status(200).json(newProfile);
};
