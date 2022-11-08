const express = require('express');
var router = express.Router();


var {Employee} = require('../models/employee');

router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{console.log('Error in retriving employee:'+JSON.stringify(err,undefined,2));}
    });
});
router.get('/:id',(req,res) =>{
    Employee.find((err,docs) =>{
    })
})
router.post('/',(req,res)=>{
    var emp =new Employee({
        name:req.body.name,
        email:req.body.email,
        ofice:req.body.office,
        salary:req.body.salary,

    });
    emp .save((err,doc)=>{
        if(!err){
            res.send(doc); }
            else{
                console.log('error in employee save:'+JSON.stringify(err,undifined,2));
            }
    });
});

module.exports = router;
