<script setup lang="ts">
import TitleComponent from '@/components/TitleComponent.vue';
</script>

<template>
  <div class="recommend">
    <TitleComponent style="">
      <template v-slot="title">
        佳作推荐
      </template>
    </TitleComponent>

  </div>
</template>

<style scoped>
.recommend {
  margin: 0 6.25rem 0 6.25rem;
}
</style>
