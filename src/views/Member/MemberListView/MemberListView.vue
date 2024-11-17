<script setup lang="ts">
import { getMemberListAPI } from '@/apis/general/member'
import { onMounted, ref } from 'vue';
import type { Member } from '@/types/general/member'

const memberList = ref<Member[]>();

const getMemberList = async () => {
  const res = await getMemberListAPI();
  memberList.value = res.data;
}

onMounted(() => {
  getMemberList();
})
</script>

<template>
  <div class="box">
    <div class="preview">
      <!-- <div class="preview-item">
        <div>总人数</div>
        <div>98</div>
      </div>
      <div class="preview-item">
        <div>世代数</div>
        <div>2</div>
      </div>
      <div class="preview-item">
        <div>现社长</div>
        <div>梦浮羽</div>
      </div> -->
    </div>
    <div class="member-list">
      <div class="member-item">
        <div>
        </div>
        <div>
          用户名
        </div>
        <div>
          群昵称
        </div>
        <div>
          QQ
        </div>
        <div>
          性别
        </div>
        <div>
          入群时间
        </div>
        <div>
          职位
        </div>
      </div>
      <div class="member-item" v-for="item in memberList" :key="item.id">
        <div>
          <el-avatar :size="40" :src="`https://q.qlogo.cn/g?b=qq&nk=` + item.uin + `&s=40`" />
        </div>
        <div>
          {{ item.nick }}
        </div>
        <div>
          {{ item.card }}
        </div>
        <div>
          {{ item.uin }}
        </div>
        <div>
          {{ item.gender }}
        </div>
        <div>
          {{ item.joinTime }}
        </div>
        <div>
          {{ item.role }}
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
}

.preview {
  width: 100%;
  height: 3.5rem;
  background-image: url("@/images/background.webp");
  background-size: cover;
  /* background-position: center center; */
  background-repeat: no-repeat;
  border-radius: .625rem;
  box-shadow: 0 0 .625rem rgba(0, 0, 0, 0.1);

  /* padding: 5rem 10rem 2rem;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 4rem; */
}

.preview-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;


  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 0.625rem;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
}

.member-list {
  margin: 3rem 15rem;
  padding: 2rem 0;
  background-color: #ffffff;
  border-radius: 2rem;
  display: grid;
  grid-auto-rows: auto;
  row-gap: 1rem;
}

.member-item {
  margin: 0 2rem;
  border-radius: 0.5rem;
  background-color: #FAFBFC;
  display: grid;
  text-align: center;
  align-items: center;
  justify-items: center;
  grid-template-columns: 4rem repeat(6, 1fr);
  word-break: break-word;

  div {
    padding: 0.6rem 0.2rem;
  }
}
</style>
