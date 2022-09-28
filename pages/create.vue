<template>
    <div>
        <h1>Crea uno schema</h1>
        <div>
            <button @click="createBoard.addRow">Aggiungi riga</button>
            <button @click="createBoard.removeRow">Togli riga</button>
        </div>
        <div>
            <button @click="createBoard.addColumn">Aggiungi colonna</button>
            <button @click="createBoard.removeColumn">Togli colonna</button>
        </div>
        <div class="flex align-center justify-center p-20">
            <div class="border-2 border-neutral-800 text-neutral-800">
                <div class="flex" v-for="n, i in createBoard.height">
                    <div v-for="m, j in createBoard.width" @click="createBoard.toggleCell(i, j)"
                        class="w-10 h-10 border-neutral-800 border-2 cursor-pointer"
                        :class="{'bg-neutral-800' : createBoard.board[i][j] == '#'}">
                        {{createBoard.board[i][j]}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">import { useCreateBoard } from '~/store/create';
const createBoard = useCreateBoard();
</script>