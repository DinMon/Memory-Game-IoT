var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let players = [
    {
      id: 1,
      name: "Din",
      level: 0,
      attempts: 1,
    },
    {
      id: 2,
      name: "James",
      level: 0,
      attempts: 1,
    },
    {
      id: 3,
      name: "Sam",
      level: 0,
      attempts: 1,
    },
  ]
  res.send({players: players});
});

module.exports = router;
