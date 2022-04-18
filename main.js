var turn = 'X';

function markCell(cellId) {
    var cell = document.getElementById(cellId);
    if (cell.innerHTML != ''){
        return;
    }

    cell.innerHTML = turn;
    checkIfWin();

    changeTurn();
}

function changeTurn(){
    // if turn is x -> change it to o
    if (turn == 'X'){
        turn = 'O';
    }
    // else - change it to x
    else{
        turn = 'X';
    }
}

function checkIfWin(){
    if(document.getElementById('0').innerHTML == document.getElementById('1').innerHTML && 
       document.getElementById('0').innerHTML == document.getElementById('2').innerHTML &&
       document.getElementById('0').innerHTML != '' 
        ||
       document.getElementById('0').innerHTML == document.getElementById('4').innerHTML && 
       document.getElementById('0').innerHTML == document.getElementById('8').innerHTML &&
       document.getElementById('0').innerHTML != '' 
        ||
       document.getElementById('0').innerHTML == document.getElementById('3').innerHTML && 
       document.getElementById('0').innerHTML == document.getElementById('6').innerHTML &&
       document.getElementById('0').innerHTML != '' 
        ||
       document.getElementById('0').innerHTML == document.getElementById('3').innerHTML && 
       document.getElementById('0').innerHTML == document.getElementById('6').innerHTML &&
       document.getElementById('0').innerHTML != '' 
       ||
        // CELL 1
       document.getElementById('1').innerHTML == document.getElementById('4').innerHTML && 
       document.getElementById('1').innerHTML == document.getElementById('7').innerHTML &&
       document.getElementById('1').innerHTML != '' 
       ||
        // CELL 2
       document.getElementById('2').innerHTML == document.getElementById('5').innerHTML && 
       document.getElementById('2').innerHTML == document.getElementById('8').innerHTML &&
       document.getElementById('2').innerHTML != '' 
       ||
       document.getElementById('2').innerHTML == document.getElementById('4').innerHTML && 
       document.getElementById('2').innerHTML == document.getElementById('6').innerHTML &&
       document.getElementById('2').innerHTML != '' 
       ||
        // CELL 3
       document.getElementById('3').innerHTML == document.getElementById('4').innerHTML && 
       document.getElementById('3').innerHTML == document.getElementById('5').innerHTML &&
       document.getElementById('3').innerHTML != '' 
       ||
        // CELL 4
       document.getElementById('6').innerHTML == document.getElementById('7').innerHTML && 
       document.getElementById('6').innerHTML == document.getElementById('8').innerHTML &&
       document.getElementById('6').innerHTML != '' 
    ){
        alert(turn + ' Won!');
        clearBoard();
    }
}

// we want to clear all the cells(board) if win and do this with a minimum of 5 rows code (maybe a 'for' loop)
function clearBoard(){
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = '';
    }
}
