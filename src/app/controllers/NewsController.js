class NewsController{
    // [GET]
    index(req,res){
        res.send("NEWS !!!")
    }
    show(req,res){
        res.send("NEWS DETAILS !!!")
    }
}
module.exports = new NewsController