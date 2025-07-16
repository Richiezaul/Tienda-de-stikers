# 🛒 Sticker Shop - Tienda Online en Node.js

Una tienda virtual de stickers con funcionalidades completas, incluyendo carrito, vista previa sobre una moto, envío de factura en PDF por correo electrónico y más.

---

## 🚀 Características

- Visualización de productos organizados por categorías.
- Carrito funcional con almacenamiento en `localStorage`.
- Vista previa de stickers con arrastrar y redimensionar.
- Generación de factura en PDF usando `pdfkit`.
- Envío automático de factura por correo con `nodemailer`.
- Diseño moderno y adaptable con CSS.

---

## 📦 Instalación

1. Clona o descarga este repositorio.
2. Navega al directorio del proyecto:
   ```bash
   cd sticker-shop
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

---

## ▶️ Ejecución del proyecto

```bash
npm start
```

Abre tu navegador y ve a:

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
├── views/
│   ├── index.ejs
│   ├── cart.ejs
│   ├── contact.ejs
│   ├── preview.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
├── public/
│   ├── css/
│   │   └── style.css
│   └── images/
└── invoices/
```

---

## 🧾 Configuración de Nodemailer

Abre el archivo `routes/index.js` y reemplaza:

```js
user: "TUCORREO@gmail.com",
pass: "TU_APP_PASSWORD"
```

> ⚠️ Usa una contraseña de aplicación de Gmail y no tu contraseña real. Activa la verificación en dos pasos y genera una clave de app segura.

---

## 🖼️ Agregar Imágenes

Coloca tus imágenes en la carpeta:

```
/public/images/
```

Ejemplos:
- `moto.png` (para la vista previa)
- `sticker1.png`, `sticker2.png`, etc.

---

## ✅ Créditos

Desarrollado con ❤️ usando:
- Node.js
- Express
- EJS
- PDFKit
- Nodemailer

---

¡Disfruta creando tu tienda de stickers personalizada!