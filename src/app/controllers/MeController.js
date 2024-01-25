const Courses = require('../models/Course')
const {multipleMongooseToObject} = require('../../util/mongoose')

class MeController {
    // [GET]
    storedCourses(req, res, next) {
        Courses.find({})
            .then(sources => res.render('me/stored-courses',
                {
                    sources: multipleMongooseToObject(sources)
                }))
            .catch(next)
    }

}

module.exports = new MeController