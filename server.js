const express = require("express");
const app = express();
const port = 3000;

const auth = require("./middleware/auth");

// paths
app.get("/", (req, res) => res.send("Hello World!"));

app.get("/admin/:id", auth, (req, res) => res.send("Hello Admin!"));

// server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
