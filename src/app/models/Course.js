const mongoose = require('mongoose')

const Course = mongoose.model("course", new mongoose.Schema({
    name: {type: String, maxLength: 255},
    description: {type: String , maxLength: 600},
    image: {type: String , maxLength: 255},
    url: {type: String , maxLength: 255},
    slug: {type: String , maxLength: 255},
    createAt: {type: Date , default: Date.now},
    updateAt: {type: Date , default: Date.now},
}));

module.exports = Course;
