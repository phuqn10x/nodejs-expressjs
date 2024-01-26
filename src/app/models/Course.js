const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater')
const mongooseDelete = require('mongoose-delete')

const Course = new mongoose.Schema({
        name: {type: String, required: true},
        description: {type: String},
        image: {type: String},
        videoId: {type: String, required: true},
        level: {type: String},
        slug: {type: String, slug: 'name', unique: true},
    },
    {
        timestamps: true,
    });

mongoose.plugin(slug)
Course.plugin(mongooseDelete, {
    deleteAt: true,
    overrideMethods: 'all'
})
module.exports = mongoose.model('Course', Course);
