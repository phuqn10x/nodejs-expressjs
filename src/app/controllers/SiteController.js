class SiteController{
    // [GET]
    index(req,res){
        res.send("HOME PAGE !!")
    }
    search(req,res){
        res.send("SEARCH PAGE !!")
    }
}
module.exports = new SiteController