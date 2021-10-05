const mongoose = require('mongoose');

//ES6
mongoose.Promise = global.Promise

//connect o db before tests run
before(function (done){
    //connect to mongoose
    mongoose.connect('mongodb://localhost/testaroo')
    mongoose.connection.once('open', function () {
        console.log('connection Done ............')
        done()
    }).on('error', function (error) {
        console.log('Connection Error : ', error)
    })
})

//Drop The Characters Collection Beofre Each test
beforeEach(function (done){
    //Drop The Collection
    mongoose.connection.collections.mariochars.drop(function () {
        done();
    })
})

