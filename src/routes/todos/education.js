import clientPromise from '$lib/db'
import { ObjectId } from 'mongodb'

export async function get() {

    try {
        const dbConnection = await clientPromise;
        const db = dbConnection.db("test").collection('educations')
        const educationItems = await db.find().sort({year: -1}).toArray()

        if(!educationItems) {
            throw new Error("No education items.")
        }
        return {
            status: 200,
            body: {
                educationItems
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

export async function post(request) {
    // const {title, subtitle, dates, description, photo, backgroundColor} = request.body()
    // const newworkItem = new Work({title, subtitle, dates, description, photo, backgroundColor})

    try {
        const dbConnection = await clientPromise;
        const db = dbConnection.db("test").collection('educations')
        const educationItem = JSON.parse(request.body)
        await db.insertOne(educationItem)

        if(!educationItem) {
            throw new Error("There was an error awaiting the transaction.")
        }

        return {
            status: 200,
            body: {
                status: 'Success'
            }
        }
    } catch (error) {
        return {
            status: 500,
            body: {
                message: error.message
            }
        }
    }
}