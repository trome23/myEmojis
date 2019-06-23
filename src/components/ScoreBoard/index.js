import React from "react";
import "./style.css";

function ScoreBoard(props) {
  return ( 
    <header className="scoreB">
    <div className="row">
      <div className="col-md-12 col-right" id="title">
        <h2>Clickster Game!</h2>
      </div>
      <h6>Click a Super Hero, remember which one, and don't choose it again!</h6>
    </div>
    <div className="row">
      <div className="col-md-3 col-right"><h6>Current Score: {props.score}</h6></div>
      <div className="col-md-3 col-right"><h6>High Score: {props.showSuccess}</h6></div>
    </div>
  </header>    
  );
}

export default ScoreBoard;
