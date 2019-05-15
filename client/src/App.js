import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import TableView from './component/TableView';
import SingleRow from './component/SingleRow';

class App extends Component {

  state ={
    players: [],
    prevPlayMode: false,
    playMode: false, // in play mode display single row with user Id and level
    singlePlayer: {
      gameStatus: null,
      id: null,
      level: 1,
    }
  }

  componentDidMount(){
    //Fetch player data from server
    ((setPlayers) =>{
      axios.get('/players')
      .then(function (response) {
	console.log(response)
	setPlayers(response.data.players)
      })
      .catch(function (error) {
	console.log(error);
      })
    })((players => this.setState({players: players})))
  }

  componentWillUpdate(){
    ((setSinglePlayer) =>{
      axios.get('/game')
      .then(function (response) {
	console.log(response)
	setSinglePlayer(response.data.playerId, response.data.level, response.data.isGameOn)
      })
      .catch(function (error) {
	console.log(error);
      })
    })(((playerId, playerLevel, gameStatus) => this.setState({playMode:gameStatus ,singlePlayer: {gameStatus: "In-Play",id: playerId, level:playerLevel}})))

/*
    ((setPlayMode) =>{
      axios.get('/status')
      .then(function (response) {
        console.log(response)
        setPlayMode(response.data.isGameOn)
      })
      .catch(function (error) {
        console.log(error);
      })
    })((gameStatus => this.setState({playMode: gameStatus})))
*/
  }

  render() {

    return (
      <div className="App">
        <header>
          <div class="container-fluid">
            <div class="row bg-dark justify-content-center">
              <h1 class="my-3"><a id="brand" class="text-white text-decoration-none" href="#">Memory Game IoT</a></h1>
            </div>
          </div>
        </header>

        {
          (this.state.playMode)?(
            <SingleRow player={this.state.singlePlayer}/>
          ):(

            <TableView players={this.state.players}/>
          )
        }
      </div>
    );
  }
}

export default App;
