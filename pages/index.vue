<template>
  <div class="flex items-stretch h-[100vh]">
    <div class="flex flex-col">
      <div class="text-[2em] relative top-[0.5em] left-[0.5em]">
        <h1 class="intro pb-1 mb-1 headline">Hello,</h1>
        <h2 class="intro mt-1 headline" style="animation-delay: 1000ms">welcome to my website :)</h2>
      </div>
      <img class="grow min-w-0 object-cover mr-[-5rem]" src="/img/bash_tree.png" />
    </div>
    <div class="flex grow">
      <svg
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
        class="shrink w-20 h-full border-r-5 border-slate-600 translate-x-px"
      >
        <polygon points="200,0 190,0 0,200 200,200" fill="#475569" />
      </svg>
      <div class="grow bg-slate-600 flex flex-col items-center pt-20 pb-20 pl-20 pr-20 space-y-20 justify-center">
        <a href="https://mastodon.gamedev.place/@LoadCake"><nuxt-icon name="mastodon"></nuxt-icon></a>
        <a href="https://github.com/LoadCake"><nuxt-icon name="github"></nuxt-icon></a>
        <a href="https://www.linkedin.com/in/stefan-łodyga-15a982182/"><nuxt-icon name="linkedin"></nuxt-icon></a>
      </div>
    </div>
  </div>
</template>

<script>
  // Supports weights 100-900
  import '@fontsource-variable/outfit'
</script>

<style>
  .nuxt-icon svg {
    width: 98px;
    height: 96px;
  }

  .headline {
    font-family: 'Outfit Variable', sans-serif;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateX(100px) scale(0.9);
    }

    100% {
      opacity: 1;
      transform: translateX(0px) scale(1);
    }
  }

  .intro {
    animation: fade-in 1.5s ease-out 800ms 1 normal both;
  }

  a {
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    /* this could be shortened to transition: transform 0.3 ease-out */
  }

  a:hover {
    transform: translateY(-10px);
  }

  li {
    transition: transform 0.3s ease;
  }

  li:hover {
    transform: scale(1.2);
  }
</style>
