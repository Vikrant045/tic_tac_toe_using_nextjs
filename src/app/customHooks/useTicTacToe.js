"use client"
import { useState } from "react";

const EMPTY = '';             
const PLAYER_X = 'X';
const PLAYER_O = 'O';

const useTicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(EMPTY));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_X);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const checkWinner = (board) => {                                       // check winner
    const winConditions = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];

    for (let condition of winConditions) {
      const [a, b, c] = condition;                   
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (board.every(cell => cell !== EMPTY)) {  
      return 'draw';
    }

    return null;
  };

  const handleCellClick = (index) => {                              // handle cell click
    if (board[index] === EMPTY && !winner && !isDraw) {
      const newBoard = [...board]; 
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      const winner = checkWinner(newBoard); 
      console.log('Winner:', winner); 

      if (winner === 'draw') {
        setIsDraw(true);
      } else if (winner) {
        setWinner(winner);
      } else {
        setCurrentPlayer(currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X);
      }
    }
  };

  const resetGame = () => {                                                  // resetGame               
    setBoard(Array(9).fill(EMPTY));
    setCurrentPlayer(PLAYER_X);
    setWinner(null);
    setIsDraw(false);
  };

  return { board, currentPlayer, winner, isDraw, handleCellClick, resetGame };
};

export default useTicTacToe;
