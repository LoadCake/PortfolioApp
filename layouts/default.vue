<template>
    <div>
        <header class="shadow-sm bg-[#1c2c3d]">
            <nav class="container mx-auto p-4 flex justify-between border-t-2">
                <ul class="flex gap-4">
                    <li><NuxtLink to="/" class="btn">Home</NuxtLink></li>
                    <li><NuxtLink to="/about" class="btn">About</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
    <footer class=" class= h-screen bg-local bg-origin-border bg-[url('https://cdn.masto.host/mastodonart/media_attachments/files/110/191/235/383/691/419/original/df15b9346b3b207b.png')] bg-no-repeat bg-bottom bg-contain"></footer>
</template>

<style scoped>
    .router-link-exact-active {
        color: #b0d6ed;
        font-weight: bold;
    }
</style>