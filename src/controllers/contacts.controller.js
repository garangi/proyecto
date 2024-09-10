const contactsForms = require("../models/contactsForms.model") 

const contactFormController={
    guardar: async function(req,res){
        try{
            const contactForm = new contactsForms(req.body)
            await contactForm.save()
            res.status(200).json({message: "Contacto guardado correctamente"})
        }catch(error){
            res.status(500).json({message: "Error al guardar el contacto", error: error})
        }
    }
}

module.exports = contactFormController;