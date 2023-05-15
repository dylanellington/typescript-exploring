import { useState } from "react";

function useBoard(onStatusChange) {
    let [tiles, setTiles] = useState(Array(9).fill(""));
    let [currentPlayer, setCurrentPlayer] = useState("O");
    let [turn, setTurn] = useState(1);
    let [gameOver, setGameOver] = useState(false);
  
    function handleTileClick(index) {
      if (gameOver) {
        return;
      }
  
      tiles = tiles.slice();
  
      if (tiles[index] === "") {
        tiles[index] = currentPlayer;
        setTiles(tiles);
  
        if (checkForWin(currentPlayer, tiles)) {
          onStatusChange(`Player ${currentPlayer} wins!`);
          setGameOver(true);
          return;
        }

        if (turn === 9) {
          onStatusChange(`Game over, its a tie!`);
          setGameOver(true);
          return;
        }
  
        if (currentPlayer === "O") {
          currentPlayer = "X";
        } else {
          currentPlayer = "O";
        }
  
        setTurn(++turn);
        onStatusChange(`It's now player ${currentPlayer}'s turn.`);
        setCurrentPlayer(currentPlayer);
      }
    }
  
    return { tiles, handleTileClick };
  }

  function create2dArray(size): [any][any] {
    return Array(size)
      .fill(undefined)
      .map(() => {
        return [];
      });
  }
  
  function checkForWin(currPlayer, tilesCopy) {
    let rows = 3;
    let columns = 3;
    let diagonals = 2;
    let rowWins = create2dArray(rows);
    let columnWins = create2dArray(columns);
    let diagonalWins = create2dArray(2);
  
    for (let index = 0; index < tilesCopy.length; index++) {
      if (tilesCopy[index] === currPlayer) {
        let row = Math.floor(index / columns);
        let column = index % columns;
  
        rowWins[row].push(index);
        columnWins[column].push(index);
  
        if (row === column) {
          diagonalWins[0].push(index);
        }
  
        if (row + column === columns - 1) {
          diagonalWins[1].push(index);
        }
      }
    }
  
    for (let index = 0; index < rows; index++) {
      if (rowWins[index].length === rows) {
        return true;
      }
    }
  
    for (let index = 0; index < columns; index++) {
      if (columnWins[index].length === columns) {
        return true;
      }
    }
  
    for (let index = 0; index < diagonals; index++) {
      if (diagonalWins[index].length === columns) {
        return true;
      }
    }
  }

  export { useBoard };