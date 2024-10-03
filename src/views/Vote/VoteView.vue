<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getGalGameListAPI } from '@/apis/galgame';
import type { GalGame } from '@/types/galgame';
import TitleComponent from '@/components/TitleComponent.vue';
const galgameList = ref<GalGame[]>([]);

const srcollIndex = ref<number>(0);

const isMounted = ref<boolean>(false);

const getGalGameList = async () => {
  const res = await getGalGameListAPI();
  galgameList.value = res.data;
  isMounted.value = true;
}

const changeScroll = (pre: number, next: number) => {
  srcollIndex.value = next;
}

onMounted(() => {
  getGalGameList();
})
</script>

<template>
  <div class="box">
    <div class="box-content">
      <div class="rank">
        <TitleComponent style="">
          <template v-slot="title">
            实时排行
          </template>
        </TitleComponent>
        <div class="rank-content" v-if="isMounted">
          <div class="scroll">
            <div class="scroll-image">
              <el-carousel :interval="4000" type="card" height="300px" @change="changeScroll">
                <el-carousel-item v-for="i in 12" :key="i">
                  <img :src="galgameList[i - 1].url" class="image" />
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="scroll-text">
              <div class="scroll-describe">
                <div class="scroll-name">{{ galgameList[srcollIndex].name }}</div>
                <div calss="scroll-rank">rank:{{ galgameList[srcollIndex].rank }} score:{{
                  galgameList[srcollIndex].score
                }}</div>
              </div>
            </div>
          </div>

          <div class="static">
            <div class="static-row">
              <div class="static-icon"></div>
              <div class="static-name">Name</div>
              <div class="static-score">Votes</div>
            </div>
            <div v-for="i in 12" key="i" class="static-row">
              <div class="static-icon">{{ i }}</div>
              <div class="static-name">{{ galgameList[i - 1].name }}</div>
              <div class="static-score"> {{ galgameList[i - 1].score }}</div>
            </div>
          </div>
        </div>


      </div>
      <div class="history">2</div>
      <div class="vote">
        3
        <!-- <div v-for="galgame in galgameList" :key="galgame.id">
          <img :src="galgame.url" class="icon"></img>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 5rem 20rem 5rem 20rem;
}

.box-content {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
}

.rank {
  display: grid;
  grid-template-rows: 3rem 1fr;

  .rank-content {
    display: grid;
    grid-template-columns: 3fr 2fr;
    column-gap: 15rem;
  }
}

.scroll {
  width: 100%;

  .image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.static {
  padding: 1rem 1rem;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 0.625rem;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto, 1fr);
  row-gap: 1rem;

  .static-row {
    display: grid;
    grid-template-columns: 3.75rem 15.625rem 3.75rem;
    column-gap: 1.25rem;
    align-items: center;
    justify-items: center;
    text-align: center;
  }
}
</style>
