const mocha = require('mocha');
const assert = require('assert')
const Mariochar = require('./../models/mariochar')
//Describe Tests
describe('Finding Records  !!!!', function (){
    let char;
    beforeEach(function (done){
         char = new Mariochar({
            name:'Mario',
        });
        char.save().then(function () {
            assert(char.isNew === false);
            done();
        });
    });

    it("Finding One Record From The Datatbase  ", function (done) {
       Mariochar.findOne({name: 'Mario'}).then(function (res) {
           assert(res.name === 'Mario')
           done()
       })
    })

    it("Finding One Record From The Datatbase By id ", function (done) {
        Mariochar.findOne({_id: char._id}).then(function (res) {
            assert(res._id.toString() === char._id.toString())
            done()
        })
    })

})