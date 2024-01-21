const coursesRoute = require('./sources')
const siteRoute = require('./site')
function route(app){
    app.use('/courses',coursesRoute)
    app.use('/',siteRoute)
}
module.exports = route