if (process.env.NODE_ENV !== 'production')
{
  require('dotenv').config();
}
const express = require('express');
const cors = require("cors");
const axios = require('axios')
const router = require("./routes");

const { NotFoundError } = require('./error/notFoundError')
const db = require("./models")

const app = express();
const PORT = process.env.PORT || 5500;

var corsOptions = {
  origin: process.env.URL
};

app.use(router);
app.use(cors(corsOptions));

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

// app.use(errorHandler);

app.listen(PORT, () => {

  console.log("server running at 5000".green);
})