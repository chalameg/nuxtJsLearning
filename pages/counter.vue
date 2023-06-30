<template>
    <div class="flex justify-center gap-3 text-3xl mt-5">
        {{ count }}

        <button @click="store.increment()">Increment</button>
    </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store';
const store = useMainStore();

const count = computed(() => store.count)


</script>