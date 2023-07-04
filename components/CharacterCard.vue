<script lang="ts" setup>
    const props = defineProps({
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        species: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
    })

    const grayScaleWhenDead = computed(() => props.status==='Dead' ? {grayscale: true} : {})
</script>

<template>
    <NuxtLink :to="`/characters/${id}`">
        <div class="flex bg-gray-300 rounded-xl border-white">
            <NuxtImg height="200" width="200" :src="image" :modifiers="grayScaleWhenDead"/>
            <div class="m-3">
                <h3 class="mb-3">{{ name }}</h3>
                <p>{{ status }}</p>
                <p>{{ species }}</p>
                <p>{{ location }}</p>
            </div>
        </div>
    </NuxtLink>
</template>