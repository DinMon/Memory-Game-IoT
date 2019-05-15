import React from 'react'

const SingleRow = ({player}) => {
  return (
    <div id="singleRow">
      <div className="container-fluid bg-secondary justify-content-center">
        <div className="row">
          <div id="gameStatus" className="d-flex bg-primary align-items-center justify-content-center text-white">
            <h2>{player.gameStatus}</h2>
          </div>
          <div id="idSection" className="d-flex align-items-end text-white big-row-text">
            <h1 className="ml-3 big-row-text">Id: {player.id}</h1>
          </div>
          <div id="levelSection"className="d-flex align-items-end">
            <h1 className="ml-5 big-row-text">L: {player.level}</h1>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default SingleRow
