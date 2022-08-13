import clientPromise from '$lib/db'
import { ObjectId } from 'mongodb'

export async function get() {

    try {
        const dbConnection = await clientPromise;
        const db = dbConnection.db("test").collection('projects')
        const webItems = await db.find({type: "web"}).toArray()
        const iosItems = await db.find({type: "ios"}).toArray()

        if(!iosItems) {
            throw new Error("No ios items.")
        } else if (!webItems) {
            throw new Error("No web items.")
        }
        return {
            status: 200,
            body: {
                webItems,
                iosItems
            }
        }

    } catch (error) {
        return {
            status: 400,
            body: {
                message: error.message
            }
        }
    }
}
