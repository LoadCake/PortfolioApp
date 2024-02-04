<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti cum quos, quasi necessitatibus minima sunt quae adipisci saepe debitis!</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    definePageMeta({
        layout: 'products',
    })
</script>

<style lang="scss" scoped>

</style>