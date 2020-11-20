var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const database = require("../Database_Setup");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/animals', function (req, res, next) {
  database.then(function (Pet) {
    Pet.aggregate([
      {
        $group: {
          _id: "$id",
          "pets": {
            "$addToSet": {
              "name": "$name",
              "breed": "$breed",
              "status": "$status",
              "gender": "$gender",
              "yearsOld": "$yearsOld",
              "adopted": "$adopted"
            }
          }
        }
      }
    ]).then(aggregate => {
      res.json(aggregate);
    });
  });
});

router.get('/terry-cat', function (req, res, next) {
  database.then(function (Pet) {
    Pet.aggregate([
      {
        $match: {
          name: "Terry",
          id: "cat"
        }
      }
    ]).then(aggregate => {
      console.log(JSON.stringify(aggregate));
      res.json(aggregate);
    })
  });
});

router.get('/chonker-cat', function (req, res, next) {
  database.then(function (Pet) {
    Pet.aggregate([
      {
        $match: {
          name: "Chonker",
          id: "cat"
        }
      }
    ]).then(aggregate => {
      console.log(JSON.stringify(aggregate));
      res.json(aggregate);
    })
  });
});

module.exports = router;
