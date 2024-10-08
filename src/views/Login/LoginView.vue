<script setup lang="ts">
import { loginAPI } from '@/apis/user/user';
import type { LoginParams } from '@/types/user/user';
import { ref } from 'vue';
import { useUserStore } from '@/stores';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';

const router = useRouter();

const userStore = useUserStore();

const loginParams = ref<LoginParams>({
  qq: '',
})

const login = async () => {
  const res = await loginAPI(loginParams.value);
  userStore.setToken(res.data.token);
  ElMessage({ message: '欢迎 ' + res.data.nickName + ' 喵~', type: 'success' });
  router.go(-1);
}
</script>


<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="header">Login</div>
      <div class="form-wrapper">
        <input type="text" name="username" v-model="loginParams.qq" placeholder="username" class="input-item">
        <input type="password" name="password" placeholder="password" class="input-item">
        <div class="btn" @click="login">Login</div>
      </div>
      <div class="msg">
        <a>Welcome to Game&Love</a>
      </div>
    </div>
  </div>


</template>


<style>
* {
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
}

body {
  height: 100%;
}

.container {
  height: 100%;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}

.login-wrapper {
  background-color: #fff;
  width: 22.375rem;
  height: 36.75rem;
  border-radius: .9375rem;
  padding: 0 3.125rem;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.header {
  font-size: 2.375rem;
  font-weight: bold;
  text-align: center;
  line-height: 12.5rem;
}

.input-item {
  display: block;
  width: 100%;
  margin-bottom: 1.25rem;
  border: 0;
  padding: .625rem;
  border-bottom: .0625rem solid rgb(128, 125, 125);
  font-size: .9375rem;
  outline: none;
}

.input-item:placeholder {
  text-transform: uppercase;
}

.btn {
  text-align: center;
  padding: .625rem;
  width: 100%;
  margin-top: 2.5rem;
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  color: #fff;
}

.msg {
  text-align: center;
  line-height: 5.5rem;
}

a {
  text-decoration-line: none;
  color: #abc1ee;
}
</style>