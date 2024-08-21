const express = require("express");
const mongoose = require('mongoose');
const app = express();
// Importar rutas
const productRoutes = require("../src/routes/product.routes.js");
const salesRoutes = require("./src/routes/sales.routes.js");

// conexión a mongoose 
mongoose.connect("mongodb+srv://garangi158:PycsrOanIVjjC18l@cluster0.zgdgg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
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