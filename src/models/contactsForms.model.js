const mongoose = require('mongoose')
const contactSchema = mongoose.Schema

const ContactForm = new contactSchema({
    nombre:String,
    telefono:Number,
    email:String,
    cantidad:Number,
    fecha:String,
    hora:String
})

module.exports = mongoose.model('contactsform', ContactForm)