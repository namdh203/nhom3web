const express = require("express");
const app = express();
const cors = require("cors")
const bodyParser = require('body-parser')

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

app.listen(port, () => {
    console.log(`Server start on port ${port}`);
})