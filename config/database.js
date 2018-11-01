const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db_mern')
    .then(db => console.log('db connect to db_mern'))
    .catch(err => console.log(err));

module.exports = mongoose;