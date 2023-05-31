import { useState } from "react";
import { Helmet } from "react-helmet";
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
    <div className="body">
      <Helmet>
        <title>TicTacToe</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous"/>
      </Helmet>
      
      <div>
        <p className="title">TicTacToe</p>
        <p className="status">{status}</p>
      </div>
      
      <div className="board">
        <Board key={key} onStatusChange={onStatusChange} />
      </div>
      
      <div className="footer">
        <button className="btn btn-dark" onClick={resetGame}>Reset</button>
      </div>
    </div>
  );
}

export { Main };
