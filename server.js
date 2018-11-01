//requimenst 
const express = require('express');
const morgan = require('morgan');
const path = require('path');

//instances
const app = express();

//settings
app.set('PORT' , process.env.PORT || 666);


//middleware
app.use(morgan('dev'));
app.use(express.json());

//db connect
const { mongoose } = require('./config/database');

//routes
app.use('/api/users',require('./routes/userRouter'));

//static files
app.use(express.static(path.join(__dirname,'public')));

//server run 
app.listen(app.get('PORT'), function(){
    console.log('server run in port :' + app.get('PORT'));
});