const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const route = require('./routes')
const db = require('./config/db')
//connect DB
db.connect()
const app = express()
const port = 3000
// get route

//init static file
app.use(express.static(path.join(__dirname,'public')))
// HTTLP logger
app.use(morgan('combined'))
// Template engine
app.engine('hbs', engine({extname:"hbs"}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources','views'))
// console.log(path.join(__dirname, 'resource\\views'))
//route init
route(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})