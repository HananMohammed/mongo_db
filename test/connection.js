const mongoose = require('mongoose');

//ES6
mongoose.Promise = global.Promise

//connect o db before tests run
before(function (done){
    //connection to mongoose
    mongoose.connect('mongodb://localhost/testaroo')
    mongoose.connection.once('open', function () {
        console.log('connection Done ......')
        done()
    }).on('error', function (error) {
        console.log('Connection Error : ', error)
    })
})
