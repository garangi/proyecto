const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();

app.use(cors());

// Importar rutas
const productRoutes = require("../src/routes/product.routes.js");
const salesRoutes = require("../src/routes/sale.routes.js");
require("dotenv").config();

// conexión a mongoose 
mongoose.connect(process.env.DB_URL)
.then((db) => console.log("Conected"))
.catch((err) => console.log(err));

// Configuraciones
app.use(express.urlencoded({ extended: false}));

// configurar la ruta
app.get("/", function (req, res){
    res.send("Hello you");
});
app.use("/products", productRoutes);
app.use("/sales", salesRoutes);

// app.get("/", function (request, response) {
//     response.send("Holi")
// });

app.listen(3000, () =>{
    console.log("Server Running");
});

// cardpf = document.getElementById('cardpf')
// cardpf.style.transform = 'scale(1.9)'

