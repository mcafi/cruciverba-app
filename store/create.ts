import { defineStore } from 'pinia'

export const useCreateBoard = defineStore('createBoard', {
  state: () => ({
    board: new Array(40).fill('').map(() => new Array(30).fill('')),
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})