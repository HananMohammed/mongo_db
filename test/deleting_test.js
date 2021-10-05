const mocha = require('mocha');
const assert = require('assert')
const Mariochar = require('./../models/mariochar')
//Describe Tests
describe('Deleting records', function (){
    let char;
    beforeEach(function (done){
        char = new Mariochar({
            name:'Mario',
        });
        char.save().then(function () {
            done();
        });
    });
    it("Deletes One Record From The Datatbase", function (done) {
        Mariochar.findOneAndRemove({name: 'Mario'}).then(function () {
            Mariochar.findOne({name: 'Mario'}).then(function (result){
                assert(result === null )
                done();
            })
        })
    })

})