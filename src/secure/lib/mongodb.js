// Link para describir uso de Next.js con MongoDB Compass https://github.com/vercel/next.js/tree/canary/examples/with-mongodb

import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
    throw new Error('Variable de entorno inválida/faltante: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
    // En modo de desarrollo, se una variable global para que el valor
    // se mantenga en todas las recargas de módulos causadas por HMR (Hot Module Replacement).
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;