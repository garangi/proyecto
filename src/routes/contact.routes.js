const misRutas=require("express").Router();
const ContactsController=require("../controllers/contacts.controller");
misRutas.post("/guardar", ContactsController.guardar);

module.exports = misRutas;