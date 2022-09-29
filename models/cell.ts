export class Cell {
  isBlack: boolean;
  content: string;
  definitionNumber: number | null;

  constructor(content: string, isBlack: boolean, definitionNumber: number | null) {
    this.content = content;
    this.isBlack = isBlack;
    this.definitionNumber = definitionNumber;
  }
}

export const emptyCell: Cell = { isBlack: false, content: "", definitionNumber: null };
