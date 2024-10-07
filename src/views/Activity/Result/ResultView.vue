<script setup lang="ts">
import { galGameVoteResultAPI } from '@/apis/activity/vote';
import type { GalGameVoteResult } from '@/types/activity/vote';
import { onMounted, ref } from 'vue';

const galGameVoteResultList = ref<GalGameVoteResult[]>([])

const galGameVoteResult = async () => {
  const res = await galGameVoteResultAPI()
  galGameVoteResultList.value = res.data
  console.log(res)
}

onMounted(() => {
  galGameVoteResult()
})
</script>

<template>
  <div class="box">
    <div class="box-content">
      <div class="title">
        湖交GalGame十二交器结果公示
      </div>
      <div class="time">
        2024-10-16 ~ 永久
      </div>
      <el-empty :image-size="200" style="height: 100%;" />
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 2rem 13rem 2rem 13rem;
}

.box-content {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
  padding: 2rem 4rem 2rem 4rem;
  box-sizing: border-box;
}

.title {
  font-size: 2.4rem;
  font-weight: 500;
  display: inline-block;
  -webkit-background-clip: text;
  background-clip: text;
  color: #0000;
  white-space: nowrap;
  background-image: linear-gradient(to right, #09c8ce, #eb2f96);
  display: grid;
  align-items: center;
  justify-content: center;
}

.time {
  margin-top: .5rem;
  font-size: 1.2rem;
  display: grid;
  align-items: center;
  justify-content: center;
}
</style>
