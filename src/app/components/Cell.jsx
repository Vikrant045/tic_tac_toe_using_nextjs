"use client"
import React from 'react';
const Cell = ({ value, onClick }) => {
  return (

    <div className="cell w-[100px] h-[100px] border-2 border-gray-800 rounded-lg flex justify-center
     items-center text-5xl cursor-pointer bg-[#b77c38] transition-colors duration-300 ease-in-out 
     hover:bg-[#ca9a5c] hover:shadow-[2px_2px_5px_rgb(77,64,55)]"

    onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;