<template>
  <div class="mt-12 h-auto" @click="$router.push('/')">
    <img :src="src" class="object-cover rounded" @error="handleError" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import default_src from "@assets/images/default-logo.webp";
import useImgError from "@hooks/useImgError";

const src = ref("");
const { handleError } = useImgError(default_src);
</script>
