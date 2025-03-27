<script setup lang="ts">
import TheTitle from './components/TheTitle.vue'
import TheCounter from './components/TheCounter.vue'
</script>

<template>
  <header class="header__color--light">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <h1 class="font__h1">texto con fuente en local</h1>
    <TheTitle prop-title="texto pasado por propiedad de componente" />
    <TheTitleSlot><h2 class="font__h2--alt">texto pasado por slot de componente</h2></TheTitleSlot>
  </header>

  <main class="main__color--dark">
    <p class="font__p">texto con fuente en internet</p>
    <TheCounter></TheCounter>
  </main>
</template>

<style scoped>
@font-face {
  font-family: 'Pixelify Sans';
  src: url('@/assets/fonts/PixelifySans-Regular.ttf') format('truetype');
}
.font__h2--alt {
  font-size: var(--s-font-h2);
  font-family: 'Pixelify Sans';
  color: rgb(238, 148, 75);
}
.font__p {
  font-size: var(--s-font-p);
  font-family: 'Bytesized';
}
.font__h1 {
  font-size: var(--s-font-h1);
  font-family: 'Pixelify Sans';
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.header__color--light {
  background-color: antiquewhite;
}
.main__color--dark {
  background-color: rgb(61, 38, 7);
  color: aliceblue;
  height: 100%;
}
</style>
