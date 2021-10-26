const fs = require('fs').promises;
module.exports = async (_req, res, next) => {
  const { teams } = JSON.parse(await fs.readFile('Times.txt', 'utf-8'));
  if (teams.length === 0) return res.status(200).json({ posts: [] });
  res.status(200).json({teams});
  next();
};