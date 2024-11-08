<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getGalGameSearchByNameTotalAPI, getGalGameSearchByNameListAPI } from '@/apis/general/galgame';
import type { Page } from '@/types/general/page';
import type { GalGame } from '@/types/general/galgame';
import { Search, Tools, ArrowUpBold, ArrowDownBold, Download, Upload } from '@element-plus/icons-vue';
import { VueDraggable, type DraggableEvent } from 'vue-draggable-plus';
import download from '@/utils/html2canvas';

const tierRef = ref<HTMLElement>()

const defaultRanks = ['EX', 'S', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];

const ranks: string[] = ['EX', 'S', 'A', 'B', 'C', 'D'];

const tierList = ref<GalGame[][]>([]);

const initTierList = () => {
  tierList.value = [];
  for (let i = 0; i < ranks.length; i++) {
    tierList.value.push([]);
  }
  isFinishedLoading.value = true;
}

const isFinishedLoading = ref<boolean>(false);

const colorForTierRank = () => {
  const tierRankElements = tierRef.value?.querySelectorAll('.tier-rank') as NodeListOf<HTMLElement>;
  const colors = ["#ff7f7f", "#ffbf7f", "#ffdf7f", "#ffff7f", "#bfff7f", "#7fff7f", "#7fffff", "#7fbfff", "#7f7fff"];
  tierRankElements.forEach((row, index) => {
    row.style.backgroundColor = colors[index % colors.length];
  });
}

const page = ref<Page>({
  pageNo: 1,
  pageSize: 65
});

const searchName = ref<string>('');

const searchTotal = ref<number>(0);

const galGameSearchChange = async () => {
  page.value.pageNo = 1;
  getGalGameSearchByNameList();
}

const getGalGameSearchByNameTotal = async () => {
  const res = await getGalGameSearchByNameTotalAPI({ ...page.value, name: searchName.value });
  searchTotal.value = res.data;
}

const galGameList = ref<GalGame[]>([]);

const getGalGameSearchByNameList = async () => {
  const res = await getGalGameSearchByNameListAPI({ ...page.value, name: searchName.value });
  galGameList.value = res.data;
  isSelected();
  getGalGameSearchByNameTotal();
}

const isSelected = () => {
  for (let t = 0; t < galGameList.value.length; t++) {
    var isDelete = false;
    for (let i = 0; i < tierList.value.length; i++) {
      if (isDelete)
        break;
      for (let j = 0; j < tierList.value[i].length; j++) {
        if (isDelete)
          break;
        if (tierList.value[i][j].subjectId === galGameList.value[t].subjectId) {
          galGameList.value.splice(t, 1);
          t--;
          isDelete = true;
        }
      }
    }
  }
}

onMounted(async () => {
  getGalGameSearchByNameList();
  await initTierList();
  await colorForTierRank();
})
</script>

<template>
  <div class="box">
    <div class="box-content">
      <div class="activity">
        <div class="title">
          GalGame's TierMaker
        </div>
        <div class="time">
          2024-10-16 ~ 永久
        </div>
      </div>
      <div class="feature">
        <TitleComponent>
          <template v-slot="title">
            Tier
          </template>
        </TitleComponent>
        <div class="feature-box">
          <el-button type="primary">
            Save
            <el-icon>
              <Upload />
            </el-icon>
          </el-button>
          <el-button type="primary" @click="download(tierRef)">
            download
            <el-icon>
              <Download />
            </el-icon>
          </el-button>
        </div>
      </div>
      <div class="tier" ref="tierRef">
        <div class="tier-row" v-for="i in ranks.length" :key="i" v-if="isFinishedLoading">
          <div class="tier-rank">{{ ranks[i - 1] }}</div>
          <VueDraggable class="tier-content" group="galgame" v-model="tierList[i - 1]" :animation="100">
            <div v-for="galgame in tierList[i - 1]" :key="galgame.subjectId">
              <img :src="galgame.imgUrl" class="select-img" />
            </div>
          </VueDraggable>
          <div class="tier-btn" data-html2canvas-ignore="true">
            <div class="btn-tools btn">
              <el-icon>
                <Tools />
              </el-icon>
            </div>
            <div class="btn-arrow btn">
              <el-icon>
                <ArrowUpBold />
              </el-icon>
            </div>
            <div class="btn-arrow btn">
              <el-icon>
                <ArrowDownBold />
              </el-icon>
            </div>
          </div>
        </div>
      </div>
      <el-divider class="divider" />
      <div class="select">
        <TitleComponent style="">
          <template v-slot="title">
            Select
          </template>
        </TitleComponent>
        <div class="select-content">
          <div class="search-box">
            <el-input class="search" placeholder="请输入GalGame名称" v-model="searchName"
              @keyup.enter.native="galGameSearchChange()" style="margin-left: .3125rem;" clearable>
              <template #suffix>
                <el-icon @click="galGameSearchChange()">
                  <search />
                </el-icon>
              </template>
            </el-input>
          </div>
          <VueDraggable class="select-list" ref="selectBoxRef" group="galgame" v-model="galGameList" :animation="100"
            v-if="galGameList.length > 0">
            <div v-for="galgame in galGameList" :key="galgame.subjectId">
              <img :src="galgame.imgUrl" class="select-img" />
            </div>
          </VueDraggable>
          <div v-else>
            <el-empty :image-size="200" />
          </div>
          <div class="page" v-if="galGameList.length > 0">
            <el-pagination background layout="prev, pager, next" :total="searchTotal" :page-size="page.pageSize"
              v-model:current-page="page.pageNo" @current-change="getGalGameSearchByNameList()" class="pagination" />
          </div>
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



.activity {
  text-align: center;

  .title {
    font-size: 2.4rem;
    font-weight: 500;
    display: inline-block;

    -webkit-background-clip: text;
    background-clip: text;
    color: #0000;
    white-space: nowrap;
    background-image: linear-gradient(to right, #09c8ce, #eb2f96);
  }

  .time {
    margin-top: .5rem;
    font-size: 1.2rem;
  }
}

.feature {
  padding: 2rem 3rem 2rem 3rem;
  display: flex;
  justify-content: space-between;
}

.feature-box {
  display: flex;
  align-items: center;
}

.tier {
  margin: 0 3rem 2rem 3rem;
  display: grid;
  grid-auto-rows: auto;
}


.tier-row {
  display: grid;
  grid-template-columns: 6rem auto 5rem;
  grid-template-rows: minmax(5rem, auto);
  border-top: .0938rem solid #999;
  border-left: .0625rem solid #999;
  border-right: .0625rem solid #999;
}

.tier-row:last-of-type {
  border-bottom: .0938rem solid #999;
}

.tier-rank {
  display: grid;
  align-items: center;
  justify-items: center;
  font-size: 1.2rem;
  font-weight: 400;
  color: #333;
  border-right: .0625rem solid #999;
}

.tier-content {
  display: flex;
  flex-wrap: wrap;
}

.tier-btn {
  background-color: #ffdbe6;
  padding: 0 0.5rem 0 0.5rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  border-left: .0625rem solid #999;
}

.btn-tools {
  grid-row: span 2;
  grid-column: span 1;
  font-size: 1.8rem;
}

.btn-arrow {
  font-size: 1.2rem;
}

.btn {
  transition: color 0.1s ease;
}

.btn:hover {
  color: #ff8181;
}

.search-box {
  margin-bottom: 1.5rem;
}

.search {
  margin-left: auto !important;
  width: 15rem;
  height: 2.7rem;
  display: flex;
}

.select {
  padding: 2rem 3rem 2rem 3rem;
}

.select-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 5rem);
  grid-template-rows: repeat(auto-fill, 5rem);
}

.select-img {
  width: 5rem;
  height: 5rem;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
}

.page {
  margin-top: 2rem;
  display: flex;
}

.pagination {
  margin: 0 auto;
}

.divider {
  margin: 0;
  width: 100% !important;
  background-color: pink !important;
  border-radius: 1rem !important;
  height: 0.2rem !important;
}


:deep(.el-input__wrapper) {
  outline: 0.125rem solid pink !important;
  border-radius: 1.25rem !important;
}

.select:deep(.el-pagination.is-background .el-pager li:not(.is-disabled).is-active) {
  background-color: pink !important;
}

:deep(.el-pagination.is-background .el-pager li) {
  background-color: white !important;
}

:deep(.el-pagination.is-background button) {
  background-color: white !important;
}
</style>
