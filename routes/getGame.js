var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if (gCache.get('playerId')){
        const data = {
            playerId: gCache.get('playerId'),
            level: gCache.get('level'),
            isGameOn: gCache.get('gameStatus'),
        }
        res.send(data)
    }else{
        res.send({msg: 'No game found'})
    }
});

module.exports = router;
