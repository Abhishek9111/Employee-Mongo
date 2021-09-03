const express = require('express')
const router = express.Router()
const Employee = require('../model/employee.model')

router.get('/',(req,res)=>{
    res.render('addEmp',{viewTitle:'Add Employee'})
})


router.post('/employee',(req,res)=>{
let emp = new Employee();
emp.fullName = req.body.fullName
emp.email = req.body.email
emp.mobile = req.body.mobile
emp.city = req.body.city 
emp.save((err,result)=>{
    if(!err) res.redirect('/list')
    else
    console.log(err)
})
})


router.get('/list',(req,res)=>{
    Employee.find((err,doc)=>{
        if(!err) res.render('list',{list:doc})

    }).lean()
})

router.get('/delete/:id',(req,res)=>{
    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err)  res.redirect('/list')

    })
})

router.get('/update/:id',(req,res)=>{
    Employee.findById(req.params.id,(err,doc)=>{
        //console.log(doc)
        if(!err) res.render('update',{viewTitle:'update-record',record:doc})
    }).lean()
})

router.post('/employee-update',(req,res)=>{
    Employee.findByIdAndUpdate({_id:req.params._id},req.body,{new:true},(err,doc)=>{
        if(!err) res.redirect('/list')
    })
})
module.exports = router