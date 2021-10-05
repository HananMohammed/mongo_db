const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testaroo')

mongoose.connection.once('open', function () {
    console.log('connection Done ......')
}).on('error', function (error) {
    console.log('Connection Error : ', error)
})