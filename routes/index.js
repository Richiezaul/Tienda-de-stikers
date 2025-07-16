const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const nodemailer = require("nodemailer");
const stickers = require("../data/stickers.json");

// Función externa para generar la factura en PDF
const generarFacturaPDF = require("../utils/generarFacturaPDF");

router.get("/", (req, res) => {
  const category = req.query.category;
  const filtered = category ? stickers.filter(s => s.category === category) : stickers;
  res.render("index", { stickers: filtered, category: category || "Todas" });
});

router.get("/cart", (req, res) => res.render("cart"));
router.get("/preview", (req, res) => res.render("preview"));
router.get("/contact", (req, res) => res.render("contact"));
router.get("/message-received", (req, res) => res.render("message-received"));

router.post("/contact", (req, res) => {
  res.redirect("/message-received");
});

router.post("/checkout", (req, res) => {
  const { email, items } = req.body;
  if (!email || !items) return res.status(400).send("Datos incompletos");

  let parsedItems;
  try {
    parsedItems = JSON.parse(items);
  } catch (err) {
    return res.status(400).send("Error al leer productos");
  }

  const invoiceDir = path.join(__dirname, "..", "invoices");
  if (!fs.existsSync(invoiceDir)) fs.mkdirSync(invoiceDir);
  const filePath = path.join(invoiceDir, `factura-${Date.now()}.pdf`);

  generarFacturaPDF(parsedItems, filePath, (err) => {
    if (err) return res.status(500).send("ERROR_FACTURA");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "RichieZaul@gmail.com", // TU CORREO
        pass: "rcem eqqq jdlb flwt"    // TU APP PASSWORD DE GMAIL
      }
    });

    const mailOptions = {
      from: "Sticker Shop <RichieZaul@gmail.com>",
      to: email,
      subject: "Factura de tu compra",
      text: "Gracias por tu compra. Adjuntamos tu factura en formato PDF.",
      attachments: [{ filename: "factura.pdf", path: filePath }]
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) return res.status(500).send("ERROR_ENVIO");
      return res.status(200).send("ENVIADO_OK");
    });
  });
});

module.exports = router;
