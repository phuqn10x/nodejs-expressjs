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

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    destroy(req, res, next) {
        Course.delete({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CoursesController