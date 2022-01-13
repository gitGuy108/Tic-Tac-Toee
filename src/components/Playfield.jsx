import React, { useState, useEffect } from 'react';
import GameBox from "./GameBox";

function Playfield() {

  const [ turn, setTurn ] = useState(0);
  const [ filledBoxes, setFilledBoxes ] = useState({
    player1: [],
    player2: []
  });

  useEffect(() => {
    if (checkWin(filledBoxes.player1)) {
      alert("Player 1 won !!");
      window.location.reload(false);
    } else if (checkWin(filledBoxes.player2)) {
      alert("Player 2 won !!");
      window.location.reload(false);
    } else if (turn === 9) {
      alert("It's a draw !");
      window.location.reload(false);
    }
  }, [filledBoxes.player1, filledBoxes.player2]);

  function showSymbol (event) {

   if(event.target.innerHTML === "") {

      if(turn%2 === 0) {
        let symbol = document.createElement("h1");
        symbol.className = "x";
        symbol.textContent = "X";
        event.target.appendChild(symbol);
        setFilledBoxes(prevValue =>  ({
              ...prevValue,
             player1: [...prevValue.player1, event.target.id]
           })
         );
      } else {
        let symbol = document.createElement("h1");
        symbol.className = "o";
        symbol.textContent = "O";
        event.target.appendChild(symbol);
        setFilledBoxes(prevValue =>  ({
              ...prevValue,
             player2: [...prevValue.player2, event.target.id]
           })
         );
      }

     setTurn(turn + 1);
   }
  }

  function checkWin(array) {
    if ( array.includes("p1")  && array.includes("p2") && array.includes("p3") || array.includes("q1") && array.includes("q2") && array.includes("q3") || array.includes("r1") && array.includes("r2") && array.includes("r3") ||
    array.includes("p1") && array.includes("q1") && array.includes("r1") || array.includes("p2") && array.includes("q2") && array.includes("r2") || array.includes("p3") && array.includes("q3") && array.includes("r3") ||
    array.includes("p1") && array.includes("q2") && array.includes("r3") || array.includes("p3") && array.includes("q2") && array.includes("r1")) 
    {
      return true;
    } else {
      return false;
    }
  }


  return (
    <div className="appArea">
      <div className="wholeBox">
        <GameBox type="c" position="p1" uponClick={showSymbol}/>
        <GameBox type="b" position="q1" uponClick={showSymbol}/>
        <GameBox type="c" position="r1" uponClick={showSymbol}/><br/>
        <GameBox type="b" position="p2" uponClick={showSymbol}/>
        <GameBox type="a" position="q2" uponClick={showSymbol}/>
        <GameBox type="b" position="r2" uponClick={showSymbol}/><br/>
        <GameBox type="c" position="p3" uponClick={showSymbol}/>
        <GameBox type="b" position="q3" uponClick={showSymbol}/>
        <GameBox type="c" position="r3" uponClick={showSymbol}/>
      </div>
      <div className="gameText">
        <h3>{turn%2 === 0 ? "...Player 1's turn (X)" : "..Player 2's turn (O)"}</h3>
      </div>
    </div>
);}

export default Playfield;
