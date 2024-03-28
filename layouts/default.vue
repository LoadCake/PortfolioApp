<template>

  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tac+One&display=swap" rel="stylesheet">
  </head>
  <header>
    <div class="roll-down">
      <nav class="bg-slate-600 roll-down">
        <ul class="flex py-5 space-x-20">
          <li>
            <NuxtLink to="/" class="tac-one-regular pl-[2rem] text-[3rem]">LoadCake</NuxtLink>
          </li>
          <!--<li><NuxtLink to="/blog">Blog</NuxtLink></li>-->
        </ul>
      </nav>
    </div>
  </header>
  <slot />
</template>

<script setup></script>

<style scoped>
  .tac-one-regular {
    font-family: "Tac One", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

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
