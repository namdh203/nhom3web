const express = require("express");
const app = express();
const cors = require("cors")
var bodyParser = require('body-parser')

const port = 5000;

app.use(bodyParser.json())
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)


const Users = require("./routes/users");
app.use("/users", Users);

const Tours = require("./routes/tours");
app.use("/tours", Tours)

app.listen(port, () => {
    console.log(`Server start on port ${port}`);
})