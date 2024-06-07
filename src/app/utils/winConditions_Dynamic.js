export function generateWinConditions(size) {
    const winConditions = [];

   
    for (let i = 0; i < size; i++) {                       // Rows
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push(i * size + j);
        }
        winConditions.push(row);
    }

  
    for (let i = 0; i < size; i++) {                    // Columns
        const col = [];
        for (let j = 0; j < size; j++) {
            col.push(i + j * size);
        }
        winConditions.push(col);
    }

    
    const diagonal1 = [];                           // Diagonal (top-left to bottom-right)
    for (let i = 0; i < size; i++) {
        diagonal1.push(i * (size + 1));
    }
    winConditions.push(diagonal1);

        
    const diagonal2 = [];                          //  Diagonal (top-right to bottom-left           
    for (let i = 0; i < size; i++) {               
        diagonal2.push((i + 1) * (size - 1));
    }
    winConditions.push(diagonal2);

    return winConditions;
}


