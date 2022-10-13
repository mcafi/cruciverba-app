<template>
    <div class="bg-neutral-100">
        <h1>Crea uno schema</h1>
        <div><input type="checkbox" name="toggle-mode" :value="createBoard.blackCellsMode"
                @input="createBoard.toggleMode"></div>

        <div>

        </div>
        <div class="flex align-center justify-center p-20">
            <div class="flex flex-col">
                <div class="py-2 flex justify-end">
                    <button class="bg-red-700 rounded-md mr-2 w-10 h-10 text-white text-lg font-bold" @click="createBoard.removeColumn">-</button>
                    <button class="bg-green-800 rounded-md w-10 h-10 text-white text-lg font-bold" @click="createBoard.addColumn">+</button>
                </div>
                <div class="flex justify-end items-end">
                    <div class="px-2">
                        <button class="bg-red-700 block rounded-md w-10 h-10 mb-2 text-white text-lg font-bold" @click="createBoard.removeRow">-</button>
                        <button class="bg-green-800 block rounded-md w-10 h-10 text-white text-lg font-bold" @click="createBoard.addRow">+</button>
                    </div>
                    <div class="bg-white border-2 border-neutral-800 text-neutral-800">
                        <div class="flex" v-for="n, i in createBoard.height">
                            <BoardCell v-for="m, j in createBoard.width" :x="i" :y="j" @click="handleClick(i, j)" />
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