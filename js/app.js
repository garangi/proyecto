const express = require("express");
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

// Importar rutas
const productRoutes = require("../src/routes/product.routes.js");
const saleRoutes = require("./src/routes/sale.routes.js");

// conexión a mongoose 
mongoose.connect(process.env.DB_URL)
.then((db) => console.log("Conected"))
.catch((err) => console.log(err));

// Configuraciones
app.use(express.urlencoded({ extended: false}));

// configurar la ruta
app.use("/products", productRoutes);
app.use("/sales", salesRoutes);

// app.get("/", function (request, response) {
//     response.send("Holi")
// });

app.listen(3000, () =>{
    console.log("Server Running");
});