import { Db, MongoClient, ServerApiVersion } from "mongodb";

let db: Db;
export const connectDB = async () => {
    if (db) return db;
    try {
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
        const client = new MongoClient(uri!, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });
        db = client.db("doc-house-next");
        return db;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to connect to MongoDB");
    }
};
