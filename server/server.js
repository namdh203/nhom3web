const express = require("express");
const app = express();
const cors = require("cors");
var bodyParser = require("body-parser");

const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*'); // '*' cho phép từ tất cả các nguồn
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const Users = require("./routes/users");
app.use("/users", Users);

const Tours = require("./routes/tours");
app.use("/tours", Tours);

const Accom = require("./routes/accommodations");
app.use("/accommodation", Accom);

const Rest = require("./routes/restaurants");
app.use("/restaurant", Rest);

const Activity = require("./routes/activities");
app.use("/activity", Activity);

const Dest = require("./routes/dests");
app.use("/dest", Dest);

const Destinations = require("./routes/destinations");
app.use("/destinations", Destinations);

const Transportations = require("./routes/transportations");
app.use("/transportations", Transportations);

app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});
