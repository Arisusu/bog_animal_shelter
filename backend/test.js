const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const petSchema = new Schema ({
    name: String,
    breed: String,
    status: String,
    gender: String,
    yearsOld: Number,
    adopted: Boolean,
    id: String,
});

const conn = mongoose.createConnection('mongodb://localhost/animal_shelter', { useNewUrlParser: true });
const Pet = conn.model('Pet', petSchema);

const aggregate = Pet.aggregate([
    {$group: {
        _id: null,
       count: { $sum: 1 }
    }}
]).then(pets => {
    console.log(pets);
});