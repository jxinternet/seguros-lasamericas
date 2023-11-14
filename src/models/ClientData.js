const { Schema, model, models } = require("mongoose");
const Polize = mongoose.model('Polize');

// Para la Base de Datos de Clientes

const clientSchema = new Schema({
    name: { 
        type: String, 
        required: [true, "Se requiere de Primer Nombre"], 
    },
    lastname: { 
        type: String, 
        required: [true, "Se requiere de Apellido"], 
    },
    cidentified: { 
        type: String, 
        required: [true, "Se requiere de Documento de Identificación (DPI)"], 
        unique: true,
    },
    addres: { 
        type: String, 
        required: [true, "La dirección es requerido"], 
    },
    phone: { 
        type: String, 
        required: [true, "Se requiere de Número de Teléfono"], 
    },
    dateofbirth: { 
        type: String, 
        required: [true, "Se requiere Fecha de Nacimiento"],
    },
    polize: {
        type: Schema.Types.String,
        ref: "Polize"
    },
    payees: [{
        type: Schema.Types.ObjectId,
    }],
    datapay: [{
        type: Schema.Types.ObjectId,
        ref: "Datapay"
    }],
    seller: [{
        type: Schema.Types.ObjectId,
        ref: "Seller"
    }]
}, {
    timestamps: true,
    versionKey: false
})

const Cliente = models.Client || model('Client', clientSchema);
export default Cliente;
