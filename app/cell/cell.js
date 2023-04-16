class Cell {
  isAlive = this.setState(2);
  rowIndex;
  columnIndex;

  constructor(rowIndex, columnIndex) {
    this.rowIndex = rowIndex;
    this.columnIndex = columnIndex;
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
}

export default Cell;
