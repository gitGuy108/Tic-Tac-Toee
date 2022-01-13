import React from 'react';

function GameBox(props) {
  return <div className={"gamebox " + props.type}>
    <button className="singlebox btn" onClick={props.uponClick} id={props.position}></button>
  </div>;
}

export default GameBox;
