<template>
    <li>
        <span class="font-black">{{definition.definitionNumber}}:</span>
        <span class="font-semibold">{{definition.content}}</span>
    </li>
</template>

<script setup lang="ts">import { Definition } from '~~/models/definition';
defineProps<{
    definition: Definition
}>()
</script>