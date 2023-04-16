import World from "./world/world.js";

const firstWorld = new World(10, 10);
firstWorld.board[4][5].killCell(firstWorld.board);
firstWorld.board[3][5].killCell(firstWorld.board);
firstWorld.board[3][4].killCell(firstWorld.board);
firstWorld.board[1][1].killCell(firstWorld.board);
const theTable = firstWorld.board.map((row) => row.map((cell) => cell.isAlive));

console.log(firstWorld.checkNeighbourhood(firstWorld.board, 0, 0));
console.table(theTable);
console.table(firstWorld.board);
