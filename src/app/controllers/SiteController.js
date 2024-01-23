const Courses = require('../models/Course')
const { multipleMongooseToObject} = require('../../util/mongoose')
class SiteController{
    // [GET]
    async index(req,res,next){
        await Courses.find({})
        .then(courses => {
            res.render('home',{ sources: multipleMongooseToObject(courses) })
        })
        .catch(next)
    }
    search(req,res){
        res.render("search")
    }
}
module.exports = new SiteController