<template>
    <div class="bg-blue-500">
        <div class="flex gap-2 items-center justify-center text-xl">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/custom">Custom</NuxtLink>
            <NuxtLink to="/counter">Counter</NuxtLink>
            <IconsBell class="mt-1"/>
        </div>
        <slot/>
    </div>
</template>