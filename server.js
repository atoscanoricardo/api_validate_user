const express = require("express");
const app = express();
const port = 3000;

// modulo de autenticacion
const auth = require("./middleware/auth");

// paths

// ruta publica
app.get("/", (req, res) => res.send("Hello World!"));

// Ruta privada
app.get("/admin/:id", auth, (req, res) => res.send("Hello Admin!"));
// Se agrega la funcion ^ auth ^ como segundo parametro de la ruta

// server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
