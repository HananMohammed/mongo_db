const mocha = require('mocha');
const assert = require('assert')
const Mariochar = require('./../models/mariochar')
//Describe Tests
describe('Saving Records To DB  !!!!', function (){
    // Create Tests
    it("Saves a record to db ", function (done) {
        let char = new Mariochar({
            name:'Mario',
            weight: 10
        });
        char.save().then(function () {
            assert(char.isNew === false )
            done();
        });
    })

})
//