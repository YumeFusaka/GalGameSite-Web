<script setup lang="ts">
import LayoutHeader from './Components/LayoutHeader.vue';
import LayoutFooter from './Components/LayoutFooter.vue';
</script>

<template>
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>

<style scoped></style>
