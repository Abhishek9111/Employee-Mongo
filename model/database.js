const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/EmployeeDB',{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false},(err)=>{
    if(err) throw err
    else 
    console.log("DataBase Connected Successfully!!")
})

module.exports = mongoose