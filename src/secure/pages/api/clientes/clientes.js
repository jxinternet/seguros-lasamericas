import clientPromise from "../../../lib/mongodb";
import { mongooseConnect } from "../../../lib/mongoose";
import ClientData from "../../../models/ClientData";

mongooseConnect(clientPromise);

// CRUD Clientes API

export default async function handler(req, res) {

    const { method, body } = req

    switch (method) {
        case 'GET':
            try {
                const client = await ClientData.find().populate('polize');
                return res.status(200).json(client);
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }

        case 'POST':
            try {
                const { polize } = req.body
                console.log(polize)
                const newClient = new ClientData(body);
    
                const saveClient = await newClient.save()
                return res.status(201).json(saveClient);
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }

        default:
            return res.status(400).json({ msg: "ERROR" });
    }

}
