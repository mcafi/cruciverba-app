<template>
    <div class="w-12 h-12 border-neutral-800 border-2 cursor-pointer flex align-stretch justify-center relative"
        :class="{'bg-yellow-300': createBoard.highlightedCell.x == x && createBoard.highlightedCell.y == y}">
        <div v-if="cell.isBlack" class="m-1 w-10 bg-neutral-800"></div>
        <div v-else>
            <div class="absolute top-0 left-1 text-xs">
                {{cell.definitionNumber}}
            </div>
            <input type="text" size="1" maxlength="1" class="w-10 h-10 p-2 text-2xl" :value="cell.content"
                @keypress="handleKeypress" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { useCreateBoard } from '~/store/create';
const createBoard = useCreateBoard();

const props = defineProps<{
    x: number,
    y: number
}>()

const cell = createBoard.board[props.x][props.y]

const handleKeypress = (e: KeyboardEvent) => {
    const pressed = e.key
    if (/[a-zA-Z]{1}/.test(pressed)) {
        createBoard.setCellContent(props.x, props.y, pressed.toUpperCase())
    }
}
</script>