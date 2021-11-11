const fs = require('fs').promises;
const teams = [];

module.exports = async (req, res, next) => {
  const { name, initials, country, league } = req.body;
  teams.push({name, initials, country, league});
  await fs.writeFile('Times.txt', JSON.stringify({teams}));
  res.status(201).json({name, initials, country, league});
};