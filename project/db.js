const mongoose = require('mongoose');

  mongoose .connect('mongodb://localhost:27017/CrudDb' ,(err)=>{
    if(!err)
    console.log('mongoDb connection succeess'); 
    else
    console.log('Error in Db connection : '+json .stringify(err,undifined,2));

  });

  module.exports = mongoose;
