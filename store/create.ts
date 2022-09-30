import { defineStore } from "pinia";
import { Cell } from "~/models/cell";

export const useCreateBoard = defineStore("createBoard", {
  state: (): {
    board: Cell[][];
    width: number;
    height: number;
    blackCellsMode: boolean;
  } => ({
    board: new Array(40).fill(null).map(() =>
      Array.from({ length: 40 }, () => {
        return { isBlack: false, content: "", definitionNumber: null };
      })
    ),
    width: 15,
    height: 12,
    blackCellsMode: true,
  }),
  getters: {
    horizontals: (state) => {
      let h = [];
      for (let i = 0; i < state.height; i++) {
        let j = 0;
        while (j < state.width) {
          if (
            state.board[i][j].definitionNumber != null &&
            !state.board[i][j + 1].isBlack
          ) {
            const def = {
              definitionNumber: state.board[i][j].definitionNumber,
              val: "",
            };
            while (j < state.width && !state.board[i][j].isBlack) {
              def.val += !!state.board[i][j].content
                ? state.board[i][j].content
                : "_";
              j++;
            }
            h.push(def);
            j++;
          }
          j++;
        }
      }
      return h;
    },
    verticals: (state) => {
      let v = [];
      for (let j = 0; j < state.width; j++) {
        let i = 0
        while (i < state.height) {
          if (state.board[i][j].definitionNumber != null && !state.board[i+1][j].isBlack) {
            const def = {
              definitionNumber: state.board[i][j].definitionNumber,
              val: "", 
            }
            while (i < state.height && !state.board[i][j].isBlack) {
              def.val += !!state.board[i][j].content
                ? state.board[i][j].content
                : "_";
              i++;
            }
            v.push(def);
            i++
          }
          i++
        }
      }
      return v
    }
  },
  actions: {
    toggleMode() {
      this.blackCellsMode = !this.blackCellsMode;
    },
    toggleCell(x: number, y: number) {
      this.board[x][y].isBlack = !this.board[x][y].isBlack;
      this.calcCellsDefinitions();
    },
    setCellContent(x: number, y: number, content: string) {
      this.board[x][y].content = content;
    },
    addRow() {
      this.height++;
    },
    removeRow() {
      if (this.height > 2) {
        this.height--;
        this.board[this.height] = Array.from({ length: 40 }, () => {
          return { isBlack: false, content: "", definitionNumber: null };
        });
      }
    },
    addColumn() {
      this.width++;
    },
    removeColumn() {
      if (this.width > 2) {
        this.width--;
        this.board.forEach((row: Cell[]) => {
          row[this.width] = {
            isBlack: false,
            content: "",
            definitionNumber: null,
          };
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
