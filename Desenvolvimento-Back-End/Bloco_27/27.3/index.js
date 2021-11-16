const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', require('./controllers/productController'));

app.use((err, _req, res, _next) => {
  console.log(err);
  res.status(500).end();
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});