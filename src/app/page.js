"use client"
import { useState } from "react";
import Board from "./components/Board";
import useTicTacToe from "./customHooks/useTicTacToe";

export default function Page() {
  const [gridSize, setGridSize] = useState(0); // Initially, no grid size is selected

  const { board, currentPlayer, winner, isDraw, handleCellClick, resetGame } = useTicTacToe(gridSize);
  
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <div>
        <select
          value={gridSize}
          onChange={(e) => setGridSize(Number(e.target.value))}
          className="p-6 px-8 border-2 rounded text-lg font-semibold border-green-500"
        >
          <option value={0} disabled hidden>Select Grid Size</option>
          <option value={3} className="text-lg font-semibold py-4">Size of 3 X 3</option>
          <option value={4} className="text-lg font-semibold py-4">Size of 4 X 4</option>
          <option value={5} className="text-lg font-semibold py-4">Size of 5 X 5</option>
          <option value={6} className="text-lg font-semibold py-4">Size of 6 X 6</option>
        </select>
      </div>
      <div className="text-2xl my-10 font-semibold p-5 border rounded text-white bg-green-600">
        Turn Of Player {currentPlayer}
      </div>
      <div className="flex flex-col items-center mr-36">
        <Board board={board} handleCellClick={handleCellClick}  arrSize={gridSize}/>  
      </div>
      <div className="flex my-10 flex-col items-center justify-center w-full">
        {winner && <div className="text-xl font-semibold">{winner} wins!</div>}
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


