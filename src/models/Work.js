const { Schema, model } = require('mongoose')

const WorkSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    subtitle: {
        type: String
    },
    dates: {
        type: String
    },
    description: {
        type: String, 
        required: true
    },
    photo: {
        type: String
    },
    backgroundColor: {
        type: String
    }
})

const Work = model('work', WorkSchema)
module.exports = Work