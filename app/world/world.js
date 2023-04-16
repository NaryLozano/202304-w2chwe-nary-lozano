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
}

export default World;
