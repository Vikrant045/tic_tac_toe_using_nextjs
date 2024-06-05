"use client"
import { useState } from "react";
import Board from "./components/Board";
import useTicTacToe from "./customHooks/useTicTacToe";

export default function page() {
  const { board, currentPlayer, winner, isDraw, handleCellClick, resetGame } = useTicTacToe();

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <div className="text-2xl my-10 font-semibold p-5 border rounded text-white bg-green-600">
        Turn Of Player {currentPlayer}
      </div>
      <div className="flex flex-col items-center mr-36">
        <Board board={board} handleCellClick={handleCellClick} />  
      </div>
      <div className="flex my-10 flex-col items-center justify-center w-full">
        {winner && <div className="text-xl font-semibold" >{winner} wins!</div>}
        {isDraw && <div className="text-xl font-semibold">It's a draw!</div>}
        {(winner || isDraw) && 
          <button onClick={resetGame} className="border-2 border-green-500 p-3 px-5 text-lg font-semibold rounded mt-6">
            Restart Game
          </button>
        }
      </div>
    </div>
  );
}

