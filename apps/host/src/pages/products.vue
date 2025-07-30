<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  const remote = await import('products/main')
  console.log('remote: ', remote)
  const mount = remote.mount || (remote.default && remote.default.mount)
  if (typeof mount === 'function') {
    mount('#products-mfe')
  } else {
    console.error('products/main does not export a mount function:', remote)
  }
})
</script>

<template>
  <div id="products-mfe">Loading Products...</div>
</template>
