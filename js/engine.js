/**
 * Global Variables init
 */
var board1;

/**
 * Call Methods
 */
onMounted();

/**
 * Methods to init functions on mounted
 */
function onMounted() {
  initGame();

  $("#flip").click(() => {
    board1.flip();
  });
}
/**
 * init the game board
 */
function initGame() {
  board1 = Chessboard("board1", {
    draggable: true,
    dropOffBoard: "trash",
    sparePieces: false
  });
  //method to start the game
  board1.start();
}

//board1.flip();
