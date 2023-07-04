<template>
    <!-- hero -->
    <div id="hero">

        <!-- flex container -->
        <div class="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
            <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 class="max-w-md text-4xl font-bold text-center md:text-5lg md:text-left">
                    Bring everyone together to build better products 
                </h1>

                <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
                    ... makes it simple for software teams to plan day-to-day tasks while
                    keeping the larger team goals in view.
                </p>

                <div class="flex justify-center md:justify-start">
                    <NuxtLink to="/" class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                        Get Started
                    </NuxtLink>
                </div>
            </div>

            <!-- image -->
            <div class="md:w-1/2">
                <NuxtImg src="/img/illustration-intro.svg" alt=""/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>