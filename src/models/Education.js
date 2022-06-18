const { Schema, model } = require('mongoose')

const EducationSchema = new Schema({
    school: {
        type: String, 
        required: true
    },
    location: {
        type: String,
        required: true
    },
    gpa: {
        type: String
    },
    major: {
        type: String
    },
    dates: {
        type: String,
        required: true
    },
    photo: {
        type: String
    },
    backgroundColor: {
        type: String
    },
    courses: {
        type: Array
    },
    achievements: {
        type: Array
    },
    description: {
        type: String
    },
    img: {
        data: Buffer,
        type: String
    }
})

const Education = model('education', EducationSchema)
module.exports = Education