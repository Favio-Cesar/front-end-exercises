<script lang="ts" setup>
defineProps<{ propTitle: string }>()
</script>
<template>
  <h2 class="font__h2">{{ propTitle }}</h2>
</template>
<style scoped>
.font__h2 {
  font-size: var(--s-font-h2);
  font-family: 'Pixelify Sans';
  color: rgb(123, 182, 35);
}
</style>
