var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/animals', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.json([
    {
      _id: 'dog',
      pets: [
        {
          name: 'Rocky',
          breed: 'American pit bull cross',
          status: 'Neutered and vaccinated',
          gender: 'Female',
          yearsOld: 7,
          adopted: false,
        },
        {
          name: 'Juju',
          breed: 'American staff cross',
          status: 'Vaccinated, not neutered',
          gender: 'Male',
          yearsOld: 7,
          adopted: false,
        },
        {
          name: 'Skipper',
          breed: 'Swiss Shepherd',
          status: 'Vaccinated, not neutered',
          gender: 'Male',
          yearsOld: 1,
          adopted: false,
        } ,
        {
          name: 'Joe',
          breed: 'Portugese Water Dog',
          status: 'Not vaccinated, not neutered',
          gender: 'Male',
          yearsOld: 6,
          adopted: false,
        } ,
        {
          name: 'Luna',
          breed: 'German Shepherd',
          status: 'Vaccinated and neutered',
          gender: 'Female',
          yearsOld: 10,
          adopted: false,
        }
      ]
    },
    {
      _id: 'cat',
      pets: [
        {
          name: 'Terry',
          breed: 'Domestic medium hair cross',
          status: 'Neutered, not vaccinated',
          gender: 'Male',
          yearsOld: 2,
          adopted: false,
        },
        {
          name: 'Chonker',
          breed: 'Main coone',
          status: 'Status unknown',
          gender: 'Female',
          yearsOld: 5,
          adopted: true,
        }
      ]
    }
  ])
});
module.exports = router;
