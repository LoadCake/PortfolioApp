<template>
    <main>
        <article class="prose lg:prose-xl dark:prose-invert">
            <ContentDoc :path="contentPath" />
        </article>
    </main>
</template>

<script setup>
    const route = useRoute();

    const contentPath = computed(() => {
        return `/${route.params.slug.filter(p => p !== 'index').join('/')}`
    })
</script>