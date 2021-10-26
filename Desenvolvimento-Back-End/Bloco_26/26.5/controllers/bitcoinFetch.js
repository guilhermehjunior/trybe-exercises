const URL = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json)';

module.exports = async (_req, res, next) => {
  try {
    const response = await fetch(URL);
  
    res.status(201).json(response.data);
    next();
  } catch (e) {
    next(e);
  }
};