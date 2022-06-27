import clientPromise from '$lib/db'
import { ObjectId } from 'mongodb'

export async function get() {

    try {
        const dbConnection = await clientPromise;
        const db = dbConnection.db("test").collection('projects')
        const projectItems = await db.find().toArray()

        if(!projectItems) {
            throw new Error("No project items.")
        }
        return {
            status: 200,
            body: {
                projectItems
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
