import { useState } from "react";
import { Board } from "./Board/Board";
import "./main.css"

function Main() {
  let [status, setStatus] = useState("Game start! Player O starts.");
  let [key, setKey] = useState(0);

  const onStatusChange = (e: string) => {
    setStatus(e);
  }

  function resetGame() {
    setKey(++key);
    setStatus("New Game! Player O goes first.");
  }

  return (
    <div className="game-wrapper">
      <div className="game-header">
        <p className="title">TicTacToe</p>
        <p>{status}</p>
      </div>
      <Board key={key} onStatusChange={onStatusChange} />
      <button className="button" onClick={resetGame}>Reset</button>
    </div>
  );
}

export { Main };
