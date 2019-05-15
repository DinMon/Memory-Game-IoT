var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'ugame',
  password : 'password',
  database : 'MemoryGame',
})

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body)
    const level = req.body.level
    const gameStatus = false

    console.log(gCache.get('playerId') + " " + level + " " + gameStatus)

    gCache.put('level', level)
    gCache.put('gameStatus', gameStatus)

    if (!gameStatus){
	// Add player to database
	  const inputLevel = Number(level)  
	  const inputId = Number(gCache.get('playerId'))  
	  const add_query = `CALL ADD_PLAYER_LEVEL(${inputId},${null},${inputLevel})`
	  connection.query(add_query, (err, playerResult) =>{
	    if(err){
	      throw err
	    }

	    console.log(playerResult)

	    res.send('Added to database');
	  })
    } 
});

module.exports = router;
