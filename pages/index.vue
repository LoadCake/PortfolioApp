<template>
  <head> </head>
  <div class="flex items-stretch h-[100vh]">
    <div>
      <div class="intro">
        <h1>Hello, welcome :)</h1>
      </div>
      <img class="grow min-w-0 object-cover mr-[-5rem]" src="/img/bash_tree.png" />
    </div>
    <div class="flex">
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
<script setup></script>

<style>
  .nuxt-icon svg {
    width: 98px;
    height: 96px;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateX(15px) scale(0.9);
    }

    100% {
      opacity: 1;
      transform: translateX(0px) scale(1);
    }
  }

  .intro {
    animation: fade-in 0.5s;
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
