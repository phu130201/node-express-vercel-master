// Import packages
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const home = require("./pages/api/home");
app.use(cors());
// Middlewares
app.use(express.json());

// Routes
app.use("/api", home);

app.use(bodyParser.json());

// connection
app.listen(port, () => {
  console.log(`Server running in : ${port}`);
});
