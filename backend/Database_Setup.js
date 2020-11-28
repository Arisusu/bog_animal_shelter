const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const petSchema = new Schema({
    name: String,
    breed: String,
    status: String,
    gender: String,
    yearsOld: Number,
    adopted: Boolean,
    id: String,
    info: String,
    image: String
});


module.exports = new Promise(async(resolve, reject) => {
    const conn = mongoose.createConnection('mongodb://localhost/animal_shelter', { useNewUrlParser: true });
    const Pet = conn.model('Pet', petSchema);

    await Pet.deleteMany({}, (err) => {
        if (err == null) {
            console.log("Sucessfully cleared database");
        } else {
            console.log("Failed to clear database");
            console.log(err);
            reject(err);
        }
    });

    const pet1 = new Pet({
        name: 'Rocky',
        breed: 'American pit bull cross',
        status: 'Neutered and vaccinated',
        gender: 'Female',
        yearsOld: 7,
        adopted: false,
        id: 'dog',
        info: 'i hope we won\'t have a ROCKY relationship',
        image: 'https://thehappypuppysite.com/wp-content/uploads/2017/11/Pitbull-Lab-Mix-LS-long.jpg'
    });

    const pet2 = new Pet({
        name: 'Juju',
        breed: 'American staffy cross',
        status: 'Vaccinated, not neutered',
        gender: 'Male',
        yearsOld: 7,
        adopted: false,
        id: 'dog',
        info: 'am dog. woof.',
        image: 'https://www.dogbreedinfo.com/images31/AmericanBullStaffyDogAmericanBulldogAmericanStaffordshireTerrierMixBreedDogAtlas1.jpg'
    });

    const pet3 = new Pet({
        name: 'Terry',
        breed: 'Domestic medium hair cross',
        status: 'Neutered, not vaccinated',
        gender: 'Male',
        yearsOld: 2,
        adopted: false,
        id: 'cat',
        info: 'everyone thinks i\'m a dog',
        image: 'https://www.vancouversun.com/news/metro/cms/binary/9838523.jpg?size=640x420'
    });

    const pet4 = new Pet({
        name: 'Chonker',
        breed: 'Maine coone',
        status: 'Status unknown',
        gender: 'Female',
        yearsOld: 5,
        adopted: false,
        id: 'cat',
        info: 'c h o n k',
        image: 'https://cdn.telanganatoday.com/wp-content/uploads/2019/04/123032MAINE-COON-BLACK.jpg'
    });

    await Pet.insertMany([pet1, pet2, pet3, pet4], function (err) {
        if (err == null) {
            console.log("Sucessfully inserted pets into database");
        } else {
            console.log("Failed to insert pets into database");
            console.log(err);
            reject(err);
        }
    });
    resolve(Pet);
});