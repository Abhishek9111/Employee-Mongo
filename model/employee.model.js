const mongoose = require('mongoose')
let EmployeeSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    }

    
})

let Employee = mongoose.model('Employee',EmployeeSchema)

module.exports = Employee