const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const petSchema = new Schema ({
    name: String,
    breed: String,
    status: String,
    gender: String,
    yearsOld: Number,
    adopted: Boolean,
    _id: String,
});

const conn = mongoose.createConnection('mongodb://localhost/animal_shelter');
const Pet = conn.model('Pet', petSchema);
const pet1 = new Pet({
    name: 'Rocky',
	breed: 'American pit bull cross',
	status: 'Neutered and vaccinated',
	gender: 'Female',
	yearsOld: 7,
	adopted: false,
    _id: 'dog'
});

const pet2 = new Pet({
    name: 'Juju',
    breed: 'American staff cross',
    status: 'Vaccindated, not neutered',
    gender: 'Male',
    yearsOld: 7,
    adopted: true,
    _id: 'dog'
});

const pet3 = new Pet({
    name: 'Terry',
    breed: 'Domestic medium hair cross',
    status: 'Neutered, not vaccinated',
    gender: 'Male',
    yearsOld: 2,
    adopted: false,
    _id: 'cat'
});

const pet4 = new Pet({
    name: 'Chonker',
    breed: 'Main coone',
    status: 'Status unknown',
    gender: 'Female',
    yearsOld: 5,
    adopted: true,
    _id: 'cat'
});

Pet.insertMany([pet1, pet2, pet3, pet4], function(err){
    console.log(err)
})

