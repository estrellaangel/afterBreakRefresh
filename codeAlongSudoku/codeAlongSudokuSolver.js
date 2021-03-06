const _BOARD = [ //constants should be capitalised with '_' in front
    ['.', '9', '.', '.', '4', '2', '1', '3', '6'],
    ['.', '.', '.', '9', '6', '.', '4', '8', '5'],
    ['.', '.', '.', '5', '8', '1', '.', '.', '.'],

    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
    ['5', '1', '7', '2', '.', '.', '9', '.', '.'],
    ['6', '.', '2', '.', '.', '.', '3', '7', '.'],
    
    ['1', '.', '.', '8', '.', '4', '.', '2', '.'],
    ['7', '.', '6', '.', '.', '.', '8', '1', '.'],
    ['3', '.', '.', '.', '9', '.', '.', '.', '.']
]

const _COORDS = [
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [1, 1, 1, 2, 2, 2, 3, 3, 3],

    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],

    [7, 7, 7, 8, 8, 8, 9, 9, 9],
    [7, 7, 7, 8, 8, 8, 9, 9, 9],
    [7, 7, 7, 8, 8, 8, 9, 9, 9],
]

function getRow(board, row){
    //return an arary will all of the array elements from the row
    return board[row];
}

function getCol(board, col){
    //returns an array with all of the array elements from the column
    let inCol = [];
    for(row in board){
        //goes through rows and finds the specific column number value and pushes it to the array
        inCol.push(board[row][col]);
    }
    return inCol;
}

function getQuad(board, quadNum){
    //creates an array of all the array elements in the same quardrant
    let inQuad = [];
    for(row in board){
        //row = i ----> let i = 0; i<board.length; i++
        //cycles through all the rows in the board
        for(col in board[row]){
            //cycles through all the columns in the row
            if(_COORDS[row][col] == quadNum){
                inQuad.push(board[row][col]);
            }
        }
    }
    return inQuad;
}

//filter thorugh all of the used values and return only the possible values for the cell
//#region []
function getPossible(board, row, col){
    let inRow = getRow(board, row); //gets all numbers in specific row
    let inCol = getCol(board, col); //gets all numbers in specific colum
    let inQuad = getQuad(board, _COORDS[row][col]); //gets all numbers in specific quadrant
    let possible = [];
    let notPossible = [];

    for(r in inRow){
        included = false;
        for(p in notPossible){
            if(inRow[r] == notPossible[p]){
                included = true;
            }
        }
        if(!included){
            notPossible.push(inRow[r]);
        }
    }
    //create every col element and say what isn't possible

    for(c in inCol){
        included = false;
        for(p in notPossible){
            if(inCol[c] == notPossible[p]){
                included = true;
            }
        }
        if(!included){
            notPossible.push(inCol[c]);
        }
    }

    //finds all not possible from the quad

    for(q in inQuad){
        included = false;
        for(p in notPossible){
            if(inQuad[q] == notPossible[p]){
                included = true;
            }
        }
        if(!included){
            notPossible.push(inQuad[q]);
        }
    }

    //SPLICE NOTES: array.splice(index, howmany, item1, ....., itemX)
    for(p in notPossible){
        if(notPossible[p] == "."){
            notPossible.splice(p, 1);
        }

    }

    for(let num = 1; num< 10; num++){
        if(!notPossible.includes(num+"")){
            possible.push(num+"");
        }
    }

    return possible;
}

let updated = true;

function fillInCell(board, row, col){
    if(board[row][col] == "."){
        let possible = getPossible(board, row, col);

        if(possible.length == 1){
            board[row][col] = possible[0];
            updated = true;
        }
    }

}

while (updated == true){
    updated = false;
    for(row2 in _BOARD){
        for(col2 in _BOARD[row2]){
            fillInCell(_BOARD, row2, col2);
        }
    }
}





// let loopAgain = true;

// for(row3 in _BOARD){
//     for(col3 in _BOARD){
//         if(_BOARD[row3][col3] == "."){
//             loopAgain = true;

//         }   

//     }
// }

// function fillAll(board){
//     let emptyrowCords = [];
//     let emptycolCords = [];
//     let emptySpaces = 0;
//     for(r in board){
//         for(c in board){
//             if(board[r][c] == "."){
//                 emptyrowCords.push(r);
//                 emptycolCords.push(c);
//                 emptySpaces++;
//             }
//         }
//     }
//     console.log(emptySpaces);
//     console.log(emptycolCords[0]);
//     console.log(emptyrowCords);
//     for(let i = 0; emptySpaces > 0; i++){
//         fillInCell(board, emptyrowCords[i], emptycolCords[i]);
//         if(filledItIn == true){
//             filledItIn = false;
//             emptySpaces -=1;
//             emptycolCords.splice(i, 1);
//             emptyrowCords.splice(i, 1);
//         }
//         if(i > emptyrowCords.length){
//             i = -1;
//         }

//     }
    
// }


fillInCell(_BOARD, 0,0);
console.table(_BOARD);