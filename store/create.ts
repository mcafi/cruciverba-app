import { defineStore } from "pinia";
import { Cell, emptyCell } from "~/models/cell";

export const useCreateBoard = defineStore("createBoard", {
  state: (): { board: Cell[][]; width: number; height: number } => ({
    board: new Array(100)
      .fill(null)
      .map(() => Array.from({ length: 100 }, () => new Cell("", false, null))),
    width: 20,
    height: 15,
  }),
  getters: {
    horizontals: (state) => "",
  },
  actions: {
    toggleCell(x: number, y: number) {
      this.board[x][y].isBlack = !this.board[x][y].isBlack;
      this.calcCellsDefinitions();
    },
    addRow() {
      this.height++;
    },
    removeRow() {
      if (this.height > 2) {
        this.height--;
        this.board[this.height] = Array.from(
          { length: 100 },
          () => new Cell("", false, null)
        );
      }
    },
    addColumn() {
      this.width++;
    },
    removeColumn() {
      if (this.width > 2) {
        this.width--;
        this.board.forEach((row: Cell[]) => {
          row[this.width] = new Cell("", false, null);
        });
      }
    },
    calcCellsDefinitions() {
      let defCounter = 1;
      for (let i = 0; i < this.height; i++) {
        for (let j = 0; j < this.width; j++) {
          if (!this.board[i][j].isBlack) {
            let hasDefinition = false;
            if (
              (j == 0 || this.board[i][j - 1].isBlack) &&
              j < this.width - 1 &&
              !this.board[i][j + 1].isBlack
            ) {
              this.board[i][j].definitionNumber = defCounter;
              hasDefinition = true;
            }
            if (
              (i == 0 || this.board[i - 1][j].isBlack) &&
              i < this.height - 1 &&
              !this.board[i + 1][j].isBlack
            ) {
              this.board[i][j].definitionNumber = defCounter;
              hasDefinition = true;
            }
            if (hasDefinition) defCounter++;
            else this.board[i][j].definitionNumber = null;
          }
        }
      }
    },
  },
});
