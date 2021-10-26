const express = require('express');
const userRoute = require('./routes/userRoute');
const btcRoute = require('./routes/btcRoute');
const postsRoute = require('./routes/postsRoute');
const teamsRoute = require('./routes/teamsRoute');
const middlewares = require('./middlewares');

const app = express();

app.use(express.json());

app.use('/user', userRoute);
app.use('/btc', btcRoute);
app.use('/posts', postsRoute);
app.use('/teams', teamsRoute);

app.use(middlewares.errorMiddlaware);

app.listen('3000', () => {
  console.log('Route 3000 is online');
});