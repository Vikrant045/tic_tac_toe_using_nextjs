export const winConditions = {
3: [
      [0, 1, 2],        // Row 1
      [3, 4, 5],        // Row 2
      [6, 7, 8],        // Row 3
      [0, 3, 6],        // Column 1
      [1, 4, 7],        // Column 2
      [2, 5, 8],        // Column 3
      [0, 4, 8],        // Diagonal from top-left to bottom-right
      [2, 4, 6],        // Diagonal from top-right to bottom-left
    ],
  4: [
      [0, 1, 2, 3],     // Row 1
      [4, 5, 6, 7],     // Row 2
      [8, 9, 10, 11],   // Row 3
      [12, 13, 14, 15], // Row 4
      [0, 4, 8, 12],    // Column 1
      [1, 5, 9, 13],    // Column 2
      [2, 6, 10, 14],   // Column 3
      [3, 7, 11, 15],   // Column 4
      [0, 5, 10, 15],   // Diagonal from top-left to bottom-right
      [3, 6, 9, 12],    // Diagonal from top-right to bottom-left
    ],
 5: [
      [0, 1, 2, 3, 4],          // Row 1
      [5, 6, 7, 8, 9],          // Row 2
      [10, 11, 12, 13, 14],     // Row 3
      [15, 16, 17, 18, 19],     // Row 4
      [20, 21, 22, 23, 24],     // Row 5
      [0, 5, 10, 15, 20],       // Column 1
      [1, 6, 11, 16, 21],       // Column 2
      [2, 7, 12, 17, 22],       // Column 3
      [3, 8, 13, 18, 23],       // Column 4
      [4, 9, 14, 19, 24],       // Column 5
      [0, 6, 12, 18, 24],       // Diagonal from top-left to bottom-right
      [4, 8, 12, 16, 20],       // Diagonal from top-right to bottom-left
    ],
  6: [
      [0, 1, 2, 3, 4, 5],        // Row 1
      [6, 7, 8, 9, 10, 11],      // Row 2
      [12, 13, 14, 15, 16, 17],  // Row 3
      [18, 19, 20, 21, 22, 23],  // Row 4
      [24, 25, 26, 27, 28, 29],  // Row 5
      [30, 31, 32, 33, 34, 35],  // Row 6
      [0, 6, 12, 18, 24, 30],    // Column 1
      [1, 7, 13, 19, 25, 31],    // Column 2     
      [2, 8, 14, 20, 26, 32],    // Column 3
      [3, 9, 15, 21, 27, 33],    // Column 4
      [4, 10, 16, 22, 28, 34],   // Column 5
      [5, 11, 17, 23, 29, 35],   // Column 6
      [0, 7, 14, 21, 28, 35],    // Diagonal from top-left to bottom-right
      [5, 10, 15, 20, 25, 30],   // Diagonal from top-right to bottom-left
    ],
  };
  