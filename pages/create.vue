<template>
    <div class="bg-neutral-100">
        <h1>Crea uno schema</h1>
        <div><input type="checkbox" name="toggle-mode" :value="createBoard.blackCellsMode"
                @input="createBoard.toggleMode"></div>
        <div>
            <button @click="createBoard.addRow">Aggiungi riga</button>
            <button @click="createBoard.removeRow">Togli riga</button>
        </div>
        <div>
            <button @click="createBoard.addColumn">Aggiungi colonna</button>
            <button @click="createBoard.removeColumn">Togli colonna</button>
        </div>
        <div class="flex align-center justify-center p-20">
            <div class="bg-white border-2 border-neutral-800 text-neutral-800">
                <div class="flex" v-for="n, i in createBoard.height">
                    <div v-for="m, j in createBoard.width" @click="handleClick(i, j)"
                        class="w-12 h-12 border-neutral-800 border-2 cursor-pointer flex align-stretch justify-center relative"
                        :class="{'bg-yellow-300': createBoard.highlightedCell.x == i && createBoard.highlightedCell.y == j}">
                        <div v-if="createBoard.board[i][j].isBlack" class="m-1 w-10 bg-neutral-800"></div>
                        <div v-else >
                            <div class="absolute top-0 left-1 text-xs">
                                {{createBoard.board[i][j].definitionNumber}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h4>Orizzontali</h4>
                <ul>
                    <DefinitionItem v-for="def in createBoard.horizontals" :definition="def" />
                </ul>
            </div>
            <div>
                <h4>Verticali</h4>
                <ul>
                    <DefinitionItem v-for="def in createBoard.verticals" :definition="def" />
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCreateBoard } from '~/store/create';
const createBoard = useCreateBoard();
const handleClick = (x, y) => {
    if (createBoard.blackCellsMode)
        createBoard.toggleCell(x, y)
    else
        createBoard.setHighlightedCell(x, y)
}
</script>