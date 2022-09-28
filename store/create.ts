import { defineStore } from "pinia";

export const useCreateBoard = defineStore("createBoard", {
  state: () => ({
    board: new Array(100).fill("").map(() => new Array(100).fill("")),
    width: 20,
    height: 15,
  }),
  getters: {
    cellsWithDefinitions: (state) => {
      let defCounter = 1
      for (let i = 0; i < state.width - 1; i++) {
        for (let j = 0; j < state.height -1; j++) {
        }
      }
    },
    horizonrals: (state) => "",
  },
  actions: {
    toggleCell(x: number, y: number) {
      if (this.board[x][y] == "#") this.board[x][y] = "";
      else this.board[x][y] = "#";
    },
    addRow() {
      this.height++;
    },
    removeRow() {
      if (this.height > 2) {
        this.height--;
        this.board[this.height] = new Array(100).fill("");
      }
    },
    addColumn() {
      this.width++;
    },
    removeColumn() {
      if (this.width > 2) {
        this.width--;
        this.board.forEach((row) => {
          row[this.width] = "";
        });
      }
    },
  },
});
