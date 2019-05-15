var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if (gCache.get('gameStatus')){
        const data = {
            isGameOn: gCache.get('gameStatus'),
        }
        res.send(data)
    }else{
        const data = {
            isGameOn: false,
        }
        res.send(data)
    }
});

module.exports = router;
