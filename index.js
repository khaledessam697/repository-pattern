const userService = require("./services/user-service");
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(async () => {console.log('Connected!') 
   userService.create({username:'khaledessam',password:'12345678'})
  // const users= await userService.list();
   //console.log(users);
 });

 
