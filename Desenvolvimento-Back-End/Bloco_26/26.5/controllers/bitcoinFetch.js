const URL = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json)';

module.exports = async (_req, res, next) => {
  const response = await fetch(URL);

  res.status(201).json(response.data);
  next();
};