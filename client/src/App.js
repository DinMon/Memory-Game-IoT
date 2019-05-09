import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import TableView from './component/TableView';
import SingleRow from './component/SingleRow';

class App extends Component {

  state ={
    players: [],
    playMode: true, // in play mode display single row with user Id and level
    singlePlayer: {
      status: "waiting",
      id: 1,
      level: 2,
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
