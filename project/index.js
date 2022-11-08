const express =require('express');
const bodyParsar =require('body-parser');
const Employee = require('./models/employee');
const {mongoose} = require('./db.js');

var employeecontroller =require('./controllers/employeecontroller.js')
var app =express();

app.use(bodyParsar.json());

app.listen(3100,()=>
console.log('server started at port:3100'
));
app.use('/employees',employeecontroller);