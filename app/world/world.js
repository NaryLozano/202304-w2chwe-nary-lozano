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
    const totalRows = board.length;
    const totalColumns = board[0].length;

    for (let positionX = -1; positionX <= 1; positionX++) {
      for (let positionY = -1; positionY <= 1; positionY++) {
        if (positionX === 0 && positionY === 0) {
          continue;
        }

        const neighbourRow = positionRow + positionX;
        const neighbourColumn = positionColumn + positionX;
        if (
          neighbourRow <= 0 &&
          neighbourRow < totalRows &&
          neighbourColumn <= 0 &&
          neighbourColumn < totalColumns
        ) {
          if (board[neighbourRow][neighbourColumn].isAlive) {
            neighbours++;
          }
        }
      }
    }

    return "Total neighbours:  " + neighbours;
  }
}

export default World;
