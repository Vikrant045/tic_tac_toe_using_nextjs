"use client"
import React from 'react';
import Cell from './Cell';

const Board = ({ board, handleCellClick }) => {
  return (
    <div className="board grid grid-cols-[repeat(3,_120px)] grid-rows-[repeat(3,_120px)] gap-[10px] ml-[38%]">
      {board.map((cell, index) => (
        <Cell key={index} value={cell} onClick={() => handleCellClick(index)} />
      ))}
    </div>
  );
};

export default Board;