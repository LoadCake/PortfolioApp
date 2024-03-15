<template>
    <header>
        <nav class="bg-slate-600">
            <ul class="flex py-5 space-x-20 justify-center">
                <li><NuxtLink to="/">Main Page</NuxtLink></li>
                <li><NuxtLink to="/blog">Blog</NuxtLink></li>
            </ul>
        </nav>
    </header>
    <slot />
</template>

<script setup>

</script>

<style scoped>
    .router-link-exact-active {
        color:aquamarine;
        font-weight: bold;
    }
</style>