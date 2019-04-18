var express = require('express');
var mysql = require('mysql');

const utility = require('../Utilities/utilityFunc');

var router = express.Router();

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'MemoryGame'
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  const player_query = 'CALL GET_PLAYERS()'
  connection.query(player_query, (err, playerResult) =>{
    if(err){
      throw err
    }

    const reply = {
      players: [],
      msg: null,
    }

    console.log(playerResult)

    if (playerResult[0].length)
    {
            const keysMap = {
                PLAYER_ID: 'id',
                PLAYER_NAME: 'name',
                ATTEMPT_LEVEL: 'level',
                ATTEMPT_COUNT: 'attempt',
            }
            
            const players = playerResult[0].map((item) => utility.renameKeys(keysMap, item));
            
            reply.msg = 'Successful'
            console.log(players)
            reply.players = players
    }
    else{
        reply.msg = 'Cannot retrieve the list of players'
    }
    res.send(reply);
  })
});

module.exports = router;
