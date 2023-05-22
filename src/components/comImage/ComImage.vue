<template>
  <img :src="url" @error="handleError" class="rounded" :class="show_contain && 'object-contain'"
    :style="{ height: size + 'rem', width: size + 'rem' }"> />
</template>

<script setup>
import default_src from '@assets/images/no_img.webp'

defineProps({
  src: { type: String, defalut: '' },
  size: { type: Number, defalut: 6 },
  show_contain: { type: Boolean, defalut: false },
})

const url = computed(() => {
  if (!props.src) {
    return default_src
  }
  return props.src
})

const checkImgExists = img_url => {
  return new Promise((resolve, reject) => {
    const img_obj = new Image()
    img_obj.src = img_url
    img_obj.onload = res => {
      resolve(res)
    }
    img_obj.onerror = err => {
      reject(err)
    }
  })
}
const handleError = e => {
  const { target } = e
  checkImgExists(target.src).catch(() => {
    target.src = default_src
  })
}

</script>