const coursesRoute = require('./sources')
const siteRoute = require('./site')
const meRoute = require('./me')
function route(app){
    app.use('/courses',coursesRoute)
    app.use('/',siteRoute)
    app.use('/me',meRoute)
}
module.exports = route