import Cell from "../cell/cell.js";
class World {
  board;
  constructor(totalRow, totalColumn) {
    this.board = this.createBoard(totalRow, totalColumn);
  }

  createBoard(totalRow, totalColumn) {
    const board = [];
    for (let rowIndex = 0; rowIndex < totalRow; rowIndex++) {
      const row = [];
      for (let columnIndex = 0; columnIndex < totalColumn; columnIndex++) {
        row.push(new Cell(rowIndex, columnIndex));
      }

      board.push(row);
    }

    return board;
  }

  checkNeighbourhood(board, positionRow, positionColumn) {
    let neighbours = 0;

    for (let positionX = 0; positionX < 2; positionX++) {
      for (let positionY = 0; positionY < 2; positionY++) {
        if (positionX && positionY !== 0) {
          if (
            board[positionRow - positionX][positionColumn - positionY].isAlive
          ) {
            neighbours++;
          }

          if (
            board[positionRow + positionX][positionColumn + positionY].isAlive
          ) {
            neighbours++;
          }
        }

        if (
          board[positionRow][positionColumn] !==
            board[positionRow - positionX][positionColumn - positionY] ||
          board[positionRow][positionColumn] !==
            board[positionRow - positionX][positionColumn - positionY]
        ) {
          if (
            board[positionRow + positionX][positionColumn - positionY].isAlive
          ) {
            neighbours++;
          }

          if (
            board[positionRow - positionX][positionColumn + positionY].isAlive
          ) {
            neighbours++;
          }
        }
      }
    }

    return "Total neighbours:  " + neighbours;
  }
}

export default World;
