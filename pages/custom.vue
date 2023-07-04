<script setup lang="ts">
    import { useUtils } from '@/composables/useUtils'

    definePageMeta({
        layout: 'custom',
    });

    const { sayHello } = useUtils()

    sayHello()
</script>

<template>
    <div>
        <MysiteHero/>
        <MysiteFeature/>
        <MysiteTestimonial/>
        <MysiteFooter/>
    </div>
</template>