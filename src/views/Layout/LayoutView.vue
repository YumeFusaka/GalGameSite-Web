<script setup lang="ts">
import LayoutHeader from './Components/LayoutHeader.vue';
import LayoutFooter from './Components/LayoutFooter.vue';
</script>

<template>
  <div class="Layout">
    <div class="content">
      <div>
        <LayoutHeader />
      </div>
      <div>
        <RouterView />
      </div>
      <div>
        <LayoutFooter />
      </div>
    </div>
  </div>

</template>

<style scoped>
.Layout {
  height: 100%;
  width: 100%;
}

.Layout::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/images/background.webp');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  /* filter: blur(12px);
  opacity: 0.8; */
  z-index: -1;
}

.content {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 3.5rem auto 6.25rem;
  grid-template-columns: 1fr;
}
</style>
