class Cell {
  isAlive = this.setState(2);
  positionRow;
  positionColumn;

  constructor(positionRow, positionColumn) {
    this.positionRow = positionRow;
    this.positionColumn = positionColumn;
  }

  setState(max) {
    const getRandom = Math.floor(Math.random() * max);
    if (getRandom === 1) {
      this.isAlive = true;
      return this.isAlive;
    }

    if (getRandom === 0) {
      this.isAlive = false;
      return this.isAlive;
    }
  }

  killCell(board) {
    if (board[this.positionRow][this.positionColumn]) {
      board[this.positionRow][this.positionColumn].isAlive = false;
      return board[this.positionRow][this.positionColumn].isAlive;
    }
  }
}

export default Cell;
