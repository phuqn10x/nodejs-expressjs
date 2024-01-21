class CoursesController{
    // [GET]
    index(req,res){
        res.render("courses")
    }
    show(req,res){
        res.send("course DETAILS !!!")
    }
}
module.exports = new CoursesController