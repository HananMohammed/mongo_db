const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema and Models
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
})

const MarioChar = mongoose.model('mariochar', MarioCharSchema)

module.exports = MarioChar;
