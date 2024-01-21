const Courses = require('../models/Course')

class SiteController{
    // [GET]
    async index(req,res,next){
        await Courses.find({})
        .then(sources => {
            sources = sources.map(sources => sources.toObject())
           
            res.render('home',{ sources })
        })
        .catch(next)
    }
    search(req,res){
        res.render("search")
    }
}
module.exports = new SiteController