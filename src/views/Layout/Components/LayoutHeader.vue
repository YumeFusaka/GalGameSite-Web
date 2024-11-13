<script setup lang="ts">
import { useUserStore, useRouterStore } from '@/stores';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { getUserInfoAPI } from '@/apis/user/user';
import type { UserInfoResponse } from '@/types/user/user';

const router = useRouter();

const userStore = useUserStore();

const routerStore = useRouterStore();

const pointerIsOnMenu = ref<boolean>(false);

const menuList = [
  {
    name: 'home',
    title: '首 页',
    path: '/home',
  },
  {
    name: 'member',
    title: '成 员',
    path: '/member',
  },
  {
    name: 'activity',
    title: '活 动',
    path: '/activity-list',
  },
  {
    name: 'decision',
    title: '决 议',
    path: '/decision-list',
  },
]

const handleMenuClick = (path: string) => {
  router.push(path);
}

const userInfo = ref<UserInfoResponse>();

const getUserInfo = async () => {
  const res = await getUserInfoAPI();
  userInfo.value = res.data;
}

onMounted(() => {
  getUserInfo();
})
</script>

<template>
  <div class="box">
    <div class="title-box">
      <div class="title" @click="router.push('/')">
        Game&Love
      </div>
    </div>
    <div class="menu-box">
      <div v-for="menu in menuList" :key="menu.name" class="menu-item" @mouseenter="pointerIsOnMenu = true"
        @mouseleave="pointerIsOnMenu = false"
        :class="{ 'menu-item-light': routerStore.router === menu.name && !pointerIsOnMenu }"
        @click="handleMenuClick(menu.path)">
        {{ menu.title }}
      </div>
    </div>
    <div class="info-box">
      <el-avatar v-if="userStore.token !== ''" :size="40"
        :src="`https://q.qlogo.cn/g?b=qq&nk=` + userInfo?.uin + `&s=40`" />
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
  height: 2.8rem;
  display: flex;
  box-shadow: 0 0.3125rem 0.625rem rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.title-box {
  display: flex;
  align-items: center;
}

.title {
  font-size: 1.6rem;
  font-weight: 800;
  color: #e90064;
}

.menu-box {
  display: grid;
  margin-left: 4rem;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3rem;
  align-items: center;
  justify-items: center;
}

.menu-item {
  font-size: 1.2rem;
  text-align: center;
  transition: text-shadow 0.2s ease-in-out;
}

.menu-item:hover {
  cursor: pointer;
  transform: scale(1.03);
  transition: all 0.2s ease-in-out;
  color: #e90064;
  text-shadow: 0 0 0.825rem rgba(255, 20, 147, 0.8),
    /* 外层粉色光 */
    0 0 1.25rem rgba(255, 20, 147, 0.3),
    /* 次层粉色光 */
    0 0 1.875rem rgba(255, 20, 147, 0.2);
  /* 最内层粉色光 */
}

.menu-item-light {
  color: #e90064;
  text-shadow: 0 0 0.825rem rgba(255, 20, 147, 0.8),
    /* 外层粉色光 */
    0 0 1.25rem rgba(255, 20, 147, 0.3),
    /* 次层粉色光 */
    0 0 1.875rem rgba(255, 20, 147, 0.2);
  /* 最内层粉色光 */
}

.info-box {
  margin-left: auto;
  border-radius: 0.3125rem;
  display: flex;
  align-items: center;
}

.info {
  padding: 0.3125rem 1.125rem 0.3125rem;
  font-size: 1.1rem;
  font-weight: 800;
}

.info:hover {
  cursor: pointer;
  transform: scale(1.03);
  transition: all 0.1s ease-in-out;
  color: #e90064;
}
</style>
