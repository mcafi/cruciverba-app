<template>
    <div>
        <h1>Crea uno schema</h1>
         <div class="flex" v-for="row in createBoard.board">
            <div class="w-10 h-10 border-neutral-800 border-2" v-for="cell in row">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">import { useCreateBoard } from '~/store/create';
    const createBoard = useCreateBoard();
    console.log(createBoard.board);
</script>