const express = require('express');
const userRoute = require('./routes/userRoute');
const btcRoute = require('./routes/btcRoute');

const app = express();

app.use(express.json());

app.use('/user', userRoute);
app.use('/btc', btcRoute);

app.listen('3000', () => {
  console.log('Route 3000 is online');
});