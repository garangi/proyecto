const mongoose = require('mongoose')
const contactSchema = mongoose.Schema

const ContactForm = new contactSchema({
    nombre:String,
    telefono:Number,
    email:String,
    cantidad:Number,
    date:{
        type: Date,
        default:Date.now,    
    }
    }
);

module.exports = mongoose.model('contactsform', ContactForm)