var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body)
    const playerId = req.body.id
    const level = 1

    console.log(playerId + " " + level)

    gCache.put('playerId', playerId)
    gCache.put('level', level)
    gCache.put('gameStatus', true)

    res.send('yes')
});

module.exports = router;
