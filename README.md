# 🛒 Sticker Shop - Tienda Virtual de Stickers en Node.js

Una tienda online moderna e interactiva para comprar stickers personalizados. Permite navegar por categorías, agregar productos al carrito, previsualizar stickers sobre una moto, y generar facturas en PDF enviadas automáticamente por correo electrónico.

---

## 🚀 Características principales

- Visualización de stickers organizados por categorías.
- Carrito de compras funcional con `localStorage` y contador actualizado en el navbar.
- Vista previa interactiva sobre una moto, con opción de arrastrar y redimensionar el sticker.
- Generación de factura en formato PDF con estilo profesional (cuadro de productos, colores suaves, logo, impuestos del 18%).
- Envío automático de la factura por correo electrónico usando `nodemailer`.
- El carrito se borra automáticamente solo si el envío fue exitoso.
- Interfaz moderna con logo personalizado.

---

## 📦 Instalación y ejecución

1. Clona o descarga este repositorio:

   ```bash
   git clone https://github.com/tuusuario/sticker-shop.git
   cd sticker-shop
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor:

   ```bash
   npm start
   ```

4. Abre tu navegador en:

   ```
   http://localhost:3000
   ```

---

## 📁 Estructura del proyecto

```
.
├── app.js
├── data/
│   └── stickers.json
├── routes/
│   └── index.js
├── utils/
│   └── generarFacturaPDF.js
├── views/
│   ├── index.ejs
│   ├── cart.ejs
│   ├── contact.ejs
│   ├── preview.ejs
│   ├── message-received.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
├── public/
│   ├── css/
│   │   └── style.css
│   └── images/
│       ├── moto.png
│       ├── logo.png
│       ├── sticker1.png
│       └── ...
├── invoices/
└── README.md
```

---

## 📤 Configuración del correo (Nodemailer)

Abre `routes/index.js` y reemplaza:

```js
auth: {
  user: "TUCORREO@gmail.com",
  pass: "TU_APP_PASSWORD"
}
```

> ⚠️ **Importante**: Usa una contraseña de aplicación de Gmail, no tu contraseña normal. Activa la verificación en dos pasos y crea una clave de app desde [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)

---

## 🖼️ Agregar imágenes

Coloca tus stickers y archivos necesarios en la carpeta:

```
/public/images/
```

Ejemplo de archivos:

- `moto.png` → fondo para la vista previa.
- `sticker1.png`, `sticker2.png`, etc.
- `logo.png` → logo mostrado en la barra de navegación.

---

Tecnologías: **Node.js**, **Express**, **EJS**, **PDFKit**, **Nodemailer**, **HTML/CSS/JS**

---
