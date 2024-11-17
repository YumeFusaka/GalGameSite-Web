<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  toRouterName: String
})
const toRouter = () => {
  if (props.toRouterName != undefined) {
    router.push(props.toRouterName!)
  }
}
</script>

<template>
  <div class="title">
    <span class="logo"></span>
    <span name="title" class="title-text" @click="toRouter()">
      <slot></slot>
    </span>
  </div>
</template>

<style scoped>
.title {
  display: flex;
}

.logo {
  display: inline-block;
  width: 0.625rem;
  height: 2.375rem;
  background-color: hsl(263, 83%, 73%);
  border-radius: 0.125rem;
}

.title-text {
  margin-left: 0.9375rem;
  font-size: 1.75rem;
  font-weight: 600;
  color: #d00a66;
}
</style>