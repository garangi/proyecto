const misRutas=require("express").Router();

misRutas.post("/guardar", ContactsController.guardar());

module.exports = misRutas;