import React, { useState, useEffect } from 'react';
import SquareComponent from './squarecomponent';
const initialState = ["", "", "", "", "", "", "", "", ""];
function App() {
  const [gameState, updateGameState] = useState(initialState);
  const [isXChance, updateIsXChance] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [win, setWin] = useState("");

  const onSquareClicked = (index) => {
    let strings = Array.from(gameState);
    if (strings[index] === "") {
      strings[index] = isXChance ? "X" : "0";
      updateGameState(strings);
      updateIsXChance(!isXChance);
    }
  }

  useEffect(() => {
    const winner = checkWinner();
    const listener = event => {
      alert("no");
      event.preventDefault();
    }
    if (winner) {
      //alert(`${winner} won the game`)
      setIsWin(true);
      setWin(winner);
      //updateGameState(initialState);
    }
  }, [gameState]);
  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
  }
  return (
    <div className="app-header">
      <h1 className="header-text">Tic Tac Toe</h1>
      {isWin ? <h1 className="red">{win} Won the Game</h1> : <h1>Play & Enjoy</h1>}
      <div className="row jc-center">
        <SquareComponent className="b-bottom-right" state={gameState[0]} onClick={() => onSquareClicked(0)} />
        <SquareComponent className="b-bottom-right" state={gameState[1]} onClick={() => onSquareClicked(1)} />
        <SquareComponent className="b-bottom" state={gameState[2]} onClick={() => onSquareClicked(2)} />
      </div>
      <div className="row jc-center">
        <SquareComponent className="b-bottom-right" state={gameState[3]} onClick={() => onSquareClicked(3)} />
        <SquareComponent className="b-bottom-right" state={gameState[4]} onClick={() => onSquareClicked(4)} />
        <SquareComponent className="b-bottom" state={gameState[5]} onClick={() => onSquareClicked(5)} />
      </div>
      <div className="row jc-center">
        <SquareComponent className="b-right" state={gameState[6]} onClick={() => onSquareClicked(6)} />
        <SquareComponent className="b-right" state={gameState[7]} onClick={() => onSquareClicked(7)} />
        <SquareComponent className="" state={gameState[8]} onClick={() => onSquareClicked(8)} />
      </div>
      <button className="btn" onClick={() => {
        updateGameState(initialState)
        setIsWin(false);
      }}>Clear Game</button>
    </div>
  );
}

export default App;
