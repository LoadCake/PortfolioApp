<template>
  <header>
    <div class="roll-down">
      <nav class="bg-slate-600 roll-down">
        <ul class="flex py-5 space-x-20 justify-center">
          <li><NuxtLink to="/">Main Page</NuxtLink></li>
          <!--<li><NuxtLink to="/blog">Blog</NuxtLink></li>-->
        </ul>
      </nav>
    </div>
  </header>
  <slot />
</template>

<script setup></script>

<style scoped>
  .router-link-exact-active {
    color: aquamarine;
    font-weight: bold;
  }

  @keyframes roll-down {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  .intro {
    animation-delay: 800ms;
    animation: roll-down 0.5s;
  }
</style>
