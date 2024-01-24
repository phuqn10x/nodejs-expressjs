const mongoose = require('mongoose')

const Course = mongoose.model("course", new mongoose.Schema({
        name: {type: String, required: true},
        description: {type: String},
        image: {type: String},
        videoId: {type: String, required: true},
        level: {type: String},
        slug: {type: String, slug: 'name', unique: true},
    },
    {
        timestamps: true,
    },));

module.exports = Course;
