const Course = require("../models/Course");
const {mongooseToObject} = require('../../util/mongoose')

class CoursesController {
    // [GET]
    index(req, res) {
        res.send("courses")
    }

    // [GET] / sources/:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug}).then(course => {
            res.render('courses/detail', {course: mongooseToObject(course)});
        }).catch(next)
    }

    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {
            });
    }
}

module.exports = new CoursesController