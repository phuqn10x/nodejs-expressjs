const Course = require("../models/Course");
const {mongooseToObject} = require('../../util/mongoose')

class CoursesController {
    // [GET]
    index(req, res) {
        res.render("courses")
    }

    // [GET] / sources/:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug}).then(course => {
            res.render('courses/detail', {course: mongooseToObject(course)});
        }).catch(next)
        // res.send(req.params.slug);
    }
}

module.exports = new CoursesController