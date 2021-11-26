const fs = require('fs').promises;

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const files = JSON.parse(await fs.readFile('./profiles.json', 'utf-8'));
    const profile = files.find((file) => file.id === id );
    if (!profile) return res.status(404).json({ error: { message: 'Perfil nao encontrado' } });
    res.status(200).json(profile);
  } catch (e) {
    next(e);
  }
};
