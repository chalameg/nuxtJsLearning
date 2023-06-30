<script setup lang="ts">
    import { useUtils } from '@/composables/useUtils'

    definePageMeta({
        layout: 'custom',
    });

    const { sayHello } = useUtils()

    sayHello()
</script>

<template>
    <div class="flex justify-center text-xl">Page to configure custom route!</div>
</template>