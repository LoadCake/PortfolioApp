<template>
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="`/blog${link._path}`">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </template>
  
  <script setup></script>
  
  <style lang="scss" scoped></style>
  