import React from "react";
import "./style.css";

function Header(props) {
  let status; 

  if(props.score === 0 && props.gameStarted === false) {
    status= <span>Click a Super Hero to Start!</span>
  } else if (props.score===0 && props.gameStarted=== true) {
    status= <span>Game Over, Try Again!</span>
  } else if (props.score===props.arrLength) {
    status= <span>You Win!</span>
  } else {
    status=<span>Correct</span>
  }


  return ( 
    <div>
      <div className="container">
        <div className="col text-center">
            <h2 className="font-weight-bold float-left">Clickster Memory Game! </h2>
            <span className="mid-text">{status}</span>
            <h5 className="score-display float-right">Score: {props.score} | High Score: {props.highScore}</h5>
        </div>
    </div>
  </div> 
  );
}

export default Header;
