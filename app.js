const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Permitir formularios (x-www-form-urlencoded)
app.use(bodyParser.urlencoded({ extended: false }));

// Permitir datos JSON (requerido para el checkout)
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Rutas
const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

// Servidor
app.listen(PORT, () => {
  console.log("Sticker Shop corriendo en http://localhost:" + PORT);
});
