const express= require('express')
const exphbs= require('express-handlebars')
const employeeController = require('./controllers/employeeController')
require('./model/database')
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/',employeeController)


const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>console.log(`Server is running at Port ${PORT}!!`))