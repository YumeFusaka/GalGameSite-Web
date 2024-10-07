<script setup lang="ts">
import { useUserStore } from '@/stores';
import { useRouter } from 'vue-router';

const router = useRouter();

const userStore = useUserStore();

</script>

<template>
  <div class="box">
    <div class="title-box">
      <div class="title" @click="router.push('/')">
        Game&Love
      </div>
    </div>
    <div class="info-box">
      <div class="info" @click="router.push('/login')" v-if="userStore.token === ''">Login</div>
      <div class="info" @click="userStore.clearToken(); router.push('/login')" v-else>Logout</div>
    </div>

  </div>
</template>

<style scoped>
div {
  color: #f0768b;
}

.box {
  padding: 0.625rem 2.5rem 0.625rem 2.5rem;
  height: 2.5rem;
  display: flex;
  box-shadow: 0 0.3125rem 0.625rem rgba(0, 0, 0, 0.3);
}

.title-box {
  display: flex;
  align-items: center;
}

.title {
  font-size: 1.3125rem;
  font-weight: 800;
}

.info-box {
  margin-left: auto;
  background-color: #d9d9d92e;
  border-radius: 0.3125rem;
  display: flex;
  align-items: center;
}

.info {
  padding: 0.3125rem 1.125rem 0.3125rem;

  font-size: large;
  font-weight: 800;
}
</style>
