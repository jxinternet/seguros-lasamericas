const { Schema, model, models } = require("mongoose");

const payeesSchema = new Schema({
    name_payee: { type: String, require: true },
    cidentified_payee: { type: String, require: true },
    dateofbirth: { type: String, require: true },
    age_payee: { type: String, require: true }
}, {
    timestamps: true,
    versionKey: false
})

export default models.Payees || model('Payees', payeesSchema);