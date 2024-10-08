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
        湖交GalGame十二交器实时榜单
      </div>
      <div class="time">
        2024-10-8 ~ 2024-10-15
      </div>
      <div class="rank">
        <div class="galGameResult">
          <div>排名</div>
          <div>游戏名</div>
          <div>别名</div>
          <div>信息</div>
          <div>票数</div>
        </div>
        <div class="galGameResult" v-for="(galGame, index) in galGameVoteResultList" :key="galGame.subjectId">
          <div> {{ index + 1 }}</div>
          <div> {{ galGame.name }}</div>
          <div> {{ galGame.nick }}</div>
          <div>{{ galGame.info }}</div>
          <div>{{ galGame.myVote }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
  height: 100%;
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

.rank {
  margin-top: 2rem;
  display: grid;
  grid-template-rows: auto;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
}

.galGameResult {
  padding: 0.125rem 0;
  display: grid;
  grid-template-columns: 4.375rem 2fr 2fr 3fr 6.25rem;
  grid-template-rows: minmax(3.125rem, auto);
  column-gap: 0.3125rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #e9e9e9;
}

.galGameResult:nth-child(1) {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.galGameResult:nth-child(2) {
  background-color: #ffff0a;
}


.galGameResult:nth-child(3) {
  background-color: #f4f4f4;
}

.galGameResult:nth-child(4) {
  background-color: #e2b796;
}

.galGameResult:nth-child(n+5):nth-child(-n+13) {
  background-color: #ffe9f4;
}

@media (max-width: 1600px) {
  .box {
    padding: 2rem 8rem 2rem 8rem;
  }

  .box-content {
    padding: 2rem 3rem 2rem 3rem;
  }
}

@media (max-width: 1200px) {
  .box {
    padding: 2rem 4rem 2rem 4rem;
  }

  .box-content {
    padding: 2rem 1.5rem 2rem 1.5rem;
  }


}

@media (max-width: 900px) {
  .box {
    padding: 1rem 2rem 1rem 2rem;
  }

  .box-content {
    padding: 2rem 1rem 2rem 1rem;
  }

}

@media (max-width: 768px) {
  .box {
    padding: 1rem 1.5rem 1rem 1.5rem;
  }

  .box-content {
    padding: 2rem 1rem 2rem 1rem;
  }

  .galGameResult {
    grid-template-columns: 3rem 2fr 2fr 3fr 4rem;
  }
}
</style>
