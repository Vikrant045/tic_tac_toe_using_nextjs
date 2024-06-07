"use client"
import { useState ,useEffect} from "react";
//import { winConditions } from "../utils/winConditions_Manual";
import { generateWinConditions } from "../utils/winConditions_Dynamic";
const EMPTY = '';             
const PLAYER_X = 'X';
const PLAYER_O = 'O';

const useTicTacToe = (size) => {
  let arrSize = size*size;
  const [board, setBoard] = useState(Array(arrSize).fill(EMPTY));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_X);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  useEffect(() => {
    setBoard(Array(arrSize).fill(EMPTY));
    setCurrentPlayer('X');
    setWinner(null);
    setIsDraw(false);
  }, [size]);

  const curr_winConditions = generateWinConditions(size);
  console.log("Conditions:", curr_winConditions); // Check the value of curr_winConditions
 
  const checkWinner = (board) => {                                       // check winner
    
    for (let condition of curr_winConditions) {    // match winning combinations for different sizes of grids 
      if (size == 3) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    } else if (size == 4) {
        const [a, b, c, d] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c] && board[a] === board[d]) {
            return board[a];
        }
    } else if (size == 5) {
        const [a, b, c, d, e] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c] && board[a] === board[d] && board[a] === board[e]) {
            return board[a];
        }
    } else if (size == 6) {
        const [a, b, c, d, e, f] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c] && board[a] === board[d] && board[a] === board[e] && board[a] === board[f]) {
            return board[a];
        }
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
    setBoard(Array(arrSize).fill(EMPTY));
    setCurrentPlayer(PLAYER_X);
    setWinner(null);
    setIsDraw(false);
  };

  return { board, currentPlayer, winner, isDraw, handleCellClick, resetGame };
};

export default useTicTacToe;
