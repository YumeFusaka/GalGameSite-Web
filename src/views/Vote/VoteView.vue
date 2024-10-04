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

const changeScroll = (current: number, prev: number) => {
  srcollIndex.value = current;
}

const screenWidth = ref<number>(0);


const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
}

window.addEventListener('resize', updateScreenWidth);


onMounted(() => {
  getGalGameList();
  updateScreenWidth();
})
</script>

<template>
  <div class="box">
    <div class="box-content">
      <div class="activity">
        <div class="title">
          湖北交通大学十二交器选拔
        </div>
        <div class="time">
          2024-10-9 ~ 2024-10-15
        </div>
      </div>
      <div class="rank">
        <TitleComponent style="">
          <template v-slot="title">
            实时排行
          </template>
        </TitleComponent>
        <div class="rank-content" v-if="isMounted">
          <div class="scroll">
            <div class="scroll-image">
              <el-carousel :interval="4000" :type="screenWidth >= 900 ? `card` : ` `" height="300px"
                @change="changeScroll" indicator-position="none">
                <el-carousel-item v-for="i in 12" :key="i">
                  <img :src="galgameList[i - 1].url" class="image" />
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="scroll-text">
              <div class="scroll-describe">
                <div class="scroll-name">{{ galgameList[srcollIndex].name }}</div>
                <div calss="scroll-rank">No.{{ srcollIndex + 1 }}</div>
              </div>
            </div>
            <div class="tip">

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
  display: grid;
  grid-template-rows: auto 1fr 1fr 1fr;
  row-gap: 3rem;
}

.activity {
  text-align: center;

  .title {
    font-size: 2.4rem;
    font-weight: 500;
  }

  .time {
    margin-top: .5rem;
    font-size: 1.2rem;
  }
}

.rank {
  display: grid;
  grid-template-rows: 3rem 1fr;
}

.rank-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 3rem;
}

.scroll {
  width: 100%;

  .image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.scroll-describe {
  margin-top: 0.8rem;
  padding: 0 6.25rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-items: center;
  text-align: center;

  .scroll-name {
    font-size: 1.5rem;
  }

  .scroll-rank {
    font-size: 1.2rem;
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
}

.static-row {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  column-gap: 1.25rem;
  align-items: center;
  justify-items: center;
  text-align: center;
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

  .rank-content {
    column-gap: 2rem;
  }
}

@media (max-width: 900px) {
  .box {
    padding: 1rem 2rem 1rem 2rem;
  }

  .box-content {
    padding: 2rem 1rem 2rem 1rem;
  }

  .rank-content {
    column-gap: 1rem;
  }

  .static-row {
    column-gap: 0.2rem;
  }
}

@media (max-width: 768px) {
  .box {
    padding: 1rem 1.5rem 1rem 1.5rem;
  }

  .box-content {
    padding: 2rem 1rem 2rem 1rem;
  }

  .rank-content {
    grid-template-columns: 1fr 1fr;
  }

  .rank-content {
    column-gap: 0.5rem;
  }

  .static-row {
    column-gap: 0.2rem;
  }

  .scroll-describe {
    padding: 0 1rem;
  }
}
</style>
