<template>
  <footer id="footer" class="bg-white p-4 text-center tracking-widest text-sm leading-6">
    <p class="small">© 2022 <a href="https://blog.zwying.com/">子舟</a></p>
    <p class="small">
      <!-- <svg class="icon icon-20" aria-hidden="true">
        <use xlink:href="#ICP"></use>
      </svg> -->
      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">
        京ICP备17025554号-2</a>
    </p>
    <p class="small mb-2">
      Powered by <a href="http://typecho.org" target="_blank">Typecho</a> ※
      Theme is <a href="https://blog.zwying.com" target="_blank">Cuteen</a>
    </p>
  </footer>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
#footer {
  background-image: var(--pattern-bg);
  background-size: calc(0.75px / 0.25) calc(0.75px * 4);
}
</style>