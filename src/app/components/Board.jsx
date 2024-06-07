import React from 'react';
import Cell from './Cell';

const Board = ({ board, handleCellClick, arrSize }) => {
  const gridTemplate = `repeat(${arrSize}, minmax(0, 1fr))`; // Generating grid template string dynamically

  return (
    <div className="grid" style={{ 
      gridTemplateColumns: gridTemplate,
      gridTemplateRows: gridTemplate,
      gap: '10px',
      marginLeft: '140px'
    }}>
      {board.map((cell, index) => (
        <Cell key={index} value={cell} onClick={() => handleCellClick(index)} />
      ))}
    </div>
  
  );                   
};

export default Board;
