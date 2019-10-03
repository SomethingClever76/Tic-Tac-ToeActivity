let currentPlayer = 'X';
let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

// get all td elements from the DOM and store in cellElementArray
const cellElementArray = document.querySelectorAll('td');

// write for loop to iterate over cellElementArray
for (let i = 0; i < cellElementArray.length; i++) {
    // set cellElementArray[i] to currentCell variable
    let currentCell = cellElementArray[i];

    // add an event listener to the currentCell
    currentCell.addEventListener('click', function (event) {
        const clickedCellElement = event.target;

        // console log the id of the cell being clicked on
        /*console.log(clickedCellElement)
        console.log('You clicked on cell number: ' + clickedCellElement.id);*/

        // prevent player from overwriting a cell that was already selected
        /* if currentPlayer is X, set the clickedCellElement's innerHTML to X, 
      else set it to O*/
        // call for the checkForWin function before switching player turns
        if (clickedCellElement.innerHTML === '') {
            pushSelectionToPlayerArray();
            if (currentPlayer === 'X') {
                clickedCellElement.innerHTML = 'X';
                console.log('playerXSelections:' + playerXSelections);
                checkForWin(winningCombinations, playerXSelections);
            } else {
                clickedCellElement.innerHTML = 'O';
                console.log('playerOSelections:' + playerOSelections);
                checkForWin(winningCombinations, playerOSelections);
            }
            checkforTie()
            playerTurn();
        }
    });

        // update currentPlayer variable to appropriate player (X or O)
        function playerTurn() {
            if (currentPlayer === 'X') {
                currentPlayer = 'O';
            } else if (currentPlayer === 'O') {
                currentPlayer = 'X';
            }
        }

        /*Now, we need to keep track of what selections each player has made
        to determine whether or not a player has won the game. 
        So, every time a cell is clicked, we need to push the id of the 
        clicked cells html element into the appropriate player's selections array 
        (playerXSelections or playerOSelections).*/
        function pushSelectionToPlayerArray() {
            if (currentPlayer === 'X') {
                playerXSelections.push(parseInt(currentCell.id));

            } else {
                playerOSelections.push(parseInt(currentCell.id));
            }
        }

        /*  checking for a winner.
          function checkForWin(winningCombination, playerSelections)
          for every combination in winningCombination
              set matches to 0
              for every number in the current combination
                  if the playerSelections array contains the current number
                      increment matches by one
                  if matches is equal to 3
                      return true
          we got through all combinations, so return false*/
        function checkForWin(winningCombinations, playerXSelections) {
            for (let i = 0; i < winningCombinations.length; i++) {
                let matches = 0
                for (let j = 0; j < winningCombinations[i].length; j++) {
                    if (playerXSelections.includes(winningCombinations[i][j])) {
                        matches++;
                    }
                }
                if (matches === 3) {
                    alert(currentPlayer + " wins!!!");
                    return true;
                }
            } return false;
        }
        function checkforTie() {
            let count = 0;
            for (let i = 0; i < cellElementArray.length; i++) {
                if (cellElementArray[i].innerHTML !='') {
                    count++;
                    console.log(count);
                }
                if (count === 9) {
                    alert("Tie");
                }
            }
        }
    }
