const PDFDocument = require("pdfkit");
const fs = require("fs");

function generarFacturaPDF(items, filePath, callback) {
  try {
    const doc = new PDFDocument({ margin: 50 });
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    // Header
    doc
      .fillColor("#333333")
      .fontSize(24)
      .text("Sticker Shop", { align: "center" })
      .moveDown(0.5);

    doc
      .fontSize(12)
      .fillColor("#666666")
      .text(`Factura N° ${Date.now()}`, 50, doc.y, { align: "right" })
      .text(`Fecha: ${new Date().toLocaleDateString()}`, 50, doc.y, { align: "right" })
      .moveDown();

    // Tabla
    doc.moveDown(1);
    doc.fontSize(14).fillColor("#000000").text("Detalle de la compra:", { underline: true });
    doc.moveDown(0.5);

    // Tabla - encabezado con fondo
    const tableHeaderY = doc.y;
    doc
      .save()
      .rect(50, tableHeaderY, 500, 20)
      .fill("#e0f0ff")
      .restore();

    doc
      .fillColor("#000000")
      .font("Helvetica-Bold")
      .text("#", 55, tableHeaderY + 5, { width: 30, align: "left" })
      .text("Producto", 90, tableHeaderY + 5, { width: 250, align: "left" })
      .text("Precio", 400, tableHeaderY + 5, { width: 100, align: "right" });

    doc.moveDown(1);
    doc.font("Helvetica").fillColor("#000000");

    let total = 0;
    items.forEach((item, i) => {
      const rowY = doc.y;
      doc
        .text(i + 1, 55, rowY, { width: 30, align: "left" })
        .text(item.name, 90, rowY, { width: 250, align: "left" })
        .text(`$${item.price.toFixed(2)}`, 400, rowY, { width: 100, align: "right" });
      doc.moveDown(0.7);
      total += item.price;
    });

    // Línea separadora
    doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
    doc.moveDown(1);

    // Cálculo de impuestos
    const taxRate = 0.18;
    const tax = total * taxRate;
    const finalTotal = total + tax;

    doc.font("Helvetica-Bold");
    const labelX = 400;
    const valueX = 500;

    doc.text("Subtotal:", labelX, doc.y, { width: 100, align: "right" });
    doc.text(`$${total.toFixed(2)}`, valueX, doc.y, { align: "right" });

    doc.text("Impuestos (18%):", labelX, doc.y + 15, { width: 100, align: "right" });
    doc.text(`$${tax.toFixed(2)}`, valueX, doc.y + 15, { align: "right" });

    doc.text("Total:", labelX, doc.y + 30, { width: 100, align: "right" });
    doc.text(`$${finalTotal.toFixed(2)}`, valueX, doc.y + 30, { align: "right" });

    // Footer centrado
    const pageWidth = doc.page.width;
    const footerText = "Gracias por comprar en Sticker Shop.";
    const textWidth = doc.widthOfString(footerText);
    const footerX = (pageWidth - textWidth) / 2;

    doc.moveDown(2);
    doc
      .font("Helvetica")
      .fontSize(11)
      .fillColor("#444444")
      .text(footerText, footerX, doc.y);

    doc.end();

    stream.on("finish", () => callback(null));
  } catch (err) {
    callback(err);
  }
}

module.exports = generarFacturaPDF;
