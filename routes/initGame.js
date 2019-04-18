var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body)
    const playerId = req.body.id
    const level = req.body.level

    console.log(playerId + " " + level + " " + gameStatus)

    //use caching here.
    gCache.put('playerId', playerId)
    gCache.put('level', level)

    res.send('yes')
});

module.exports = router;
