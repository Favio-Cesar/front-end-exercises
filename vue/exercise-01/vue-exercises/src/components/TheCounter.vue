<script lang="ts">
import { ref, watchEffect } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const canAdd = ref(true)
    const canSubtract = ref(true)
    watchEffect(() => {
      if (count.value >= 10) {
        canAdd.value = false
      } else {
        canAdd.value = true
      }
      if (count.value <= 0) {
        canSubtract.value = false
      } else {
        canSubtract.value = true
      }
    })

    const addValue = () => {
      count.value += 1
    }
    const subtractValue = () => {
      count.value -= 1
    }
    return {
      count,
      addValue,
      subtractValue,
      canAdd,
      canSubtract,
    }
  },
}
</script>
<template>
  <button v-if="canAdd" class="button__increase" @click="addValue">Increment</button>
  <button v-if="canSubtract" class="button__decrease" @click="subtractValue">Decrement</button>
  <p class="font__p">{{ count }}</p>
</template>

<style scoped>
.button__increase,
.button__decrease {
  border: 0.5em black royalblue;
  margin: 1em auto;
  padding: 0.7em;
  border-radius: 1.5em;
  transition: all 1s;
  font-size: var(--s-font-h3);
  font-family: 'Pixelify Sans';
}
.button__increase:hover,
.button__decrease:hover {
  background-color: rgb(255, 196, 118);
}
</style>
