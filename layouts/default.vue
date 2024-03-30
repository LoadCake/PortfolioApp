<template>
  <header>
    <nav class="bg-slate-600">
      <ul class="flex py-5 space-x-20">
        <li>
          <NuxtLink to="/" class="pl-[2rem] text-[3rem]">LoadCake</NuxtLink>
        </li>
        <!--<li><NuxtLink to="/blog">Blog</NuxtLink></li>-->
      </ul>
    </nav>
  </header>
  <NuxtPage />
</template>

<style>
  .router-link-exact-active {
    color: aquamarine;
    font-weight: bold;
  }
</style>
