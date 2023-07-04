<template>
    <div class="bg-white-500 ">

        <!-- nav -->
        <nav class="relative container mx-auto p-6">
            <!-- flex container -->
            <div class="flex items-center justify-between">
                <!-- logo -->
                <!-- <NuxtImg src="/img/logo.svg"/> -->
                LOGO
                <!-- menu items -->
                <div class="hidden md:flex space-x-6">
                    <NuxtLink to="/" class="hover:text-darkGrayishBlue">Pricing</NuxtLink>
                    <NuxtLink to="/" class="hover:text-darkGrayishBlue">Products</NuxtLink>
                    <NuxtLink to="/" class="hover:text-darkGrayishBlue">About Us</NuxtLink>
                    <NuxtLink to="/" class="hover:text-darkGrayishBlue">Careers</NuxtLink>
                    <NuxtLink to="/" class="hover:text-darkGrayishBlue">Community</NuxtLink>
                </div>

                <!-- button -->
                <NuxtLink to="/" class="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                    Get Started
                </NuxtLink>
            </div>
        </nav>
        <slot/>
    </div>
</template>