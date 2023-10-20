const express = require("express");
const app = express();
const port = 5000;
const users = require("./routes/users");

app.use("/api/users", users);

app.get("/api", (req, res) => {
    res.send("hello");
})

app.listen(port, () => {
    console.log(`Server start on port ${port}`);
})