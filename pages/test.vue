<script setup>
const { data: serverData } = useFetch('/api/test');
</script>
<template>
    <h1>TEST</h1>
    <div>
        <pre>{{ serverData }}</pre>
    </div>
</template>