<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { listGames } from '@/apis/general/games'
import type { PageRequest } from '@/types/common/api'
import {
  Search,
  Tools,
  ArrowUpBold,
  ArrowDownBold,
  Upload,
  Refresh,
  Plus,
  Delete
} from '@element-plus/icons-vue'
import { VueDraggable } from 'vue-draggable-plus'
import {
  getCurrentTierMakerRecord,
  saveCurrentTierMakerRecord
} from '@/apis/activity/tier-maker'
import type { TierMakerSubject } from '@/types/domain/tier-maker'
import { ElMessage } from 'element-plus'

const defaultRanks = ['EX', 'S', 'A', 'B', 'C', 'D', 'E', 'F', 'G']

// 各层级的背景色（与原先 JS 设置的值一致）
const tierColors = [
  '#ff7f7f',
  '#ffbf7f',
  '#ffdf7f',
  '#ffff7f',
  '#bfff7f',
  '#7fff7f',
  '#7fffff',
  '#7fbfff',
  '#7f7fff'
]

const ranks = ref<string[]>([])

const tierList = ref<TierMakerSubject[][]>([])

const tierToolsIndex = ref<number>(0)

const initTierList = async () => {
  const currentRecord = await loadCurrentRecord()
  if (currentRecord.rankNames.length == 0) {
    ranks.value = ['EX', 'S', 'A', 'B', 'C', 'D', 'E']
    tierList.value = []
    for (let i = 0; i < ranks.value.length; i++) {
      tierList.value.push([])
    }
  } else {
    ranks.value = currentRecord.rankNames
    tierList.value = currentRecord.tiers
  }
  isFinishedLoading.value = true
}

const resetTier = () => {
  ranks.value = ['EX', 'S', 'A', 'B', 'C', 'D', 'E']
  tierList.value = ranks.value.map(() => [])
}

const clearAll = () => {
  tierList.value = ranks.value.map(() => [])
}

const isFinishedLoading = ref<boolean>(false)

const page = ref<PageRequest>({
  pageNo: 1,
  pageSize: 65
})

const searchName = ref<string>('')

const searchTotal = ref<number>(0)

// 请求序号：快速翻页/搜索时丢弃过期响应
let requestSeq = 0

const searchGames = () => {
  page.value.pageNo = 1
  loadGameOptions()
}

const galGameList = ref<TierMakerSubject[]>([])

const loadGameOptions = async () => {
  const seq = ++requestSeq
  const response = await listGames({ ...page.value, keyword: searchName.value })
  if (seq !== requestSeq) return
  galGameList.value = response.items.map((game) => ({
    subjectId: game.subjectId,
    imgUrl: game.imgUrl
  }))
  searchTotal.value = response.total
  isSelected()
}

// 从候选列表中移除已放入 tier 的作品
const isSelected = () => {
  const placedIds = new Set(
    tierList.value.flat().map((subject) => subject.subjectId)
  )
  galGameList.value = galGameList.value.filter(
    (game) => !placedIds.has(game.subjectId)
  )
}

const rowUp = (rowIndex: number) => {
  if (rowIndex !== 0) {
    var temp1 = tierList.value[rowIndex]
    tierList.value[rowIndex] = tierList.value[rowIndex - 1]
    tierList.value[rowIndex - 1] = temp1
    var temp2 = ranks.value[rowIndex]
    ranks.value[rowIndex] = ranks.value[rowIndex - 1]
    ranks.value[rowIndex - 1] = temp2
  }
}

const rowDown = (rowIndex: number) => {
  if (rowIndex !== tierList.value.length - 1) {
    var temp1 = tierList.value[rowIndex]
    tierList.value[rowIndex] = tierList.value[rowIndex + 1]
    tierList.value[rowIndex + 1] = temp1
    var temp2 = ranks.value[rowIndex]
    ranks.value[rowIndex] = ranks.value[rowIndex + 1]
    ranks.value[rowIndex + 1] = temp2
  }
}

const toolsDialogVisible = ref<boolean>(false)

const openToolsDialog = (i: number) => {
  toolsDialogVisible.value = true
  tierToolsIndex.value = i - 1
}

const clearRow = () => {
  tierList.value[tierToolsIndex.value] = []
}

const deleteRow = () => {
  tierList.value.splice(tierToolsIndex.value, 1)
  ranks.value.splice(tierToolsIndex.value, 1)
}

const addRow = () => {
  tierList.value.push([])
  ranks.value.push(defaultRanks[ranks.value.length])
}

const loadCurrentRecord = async () => {
  return getCurrentTierMakerRecord()
}

const saveRecord = async () => {
  await saveCurrentTierMakerRecord({
    rankNames: ranks.value,
    tiers: tierList.value
  })
  ElMessage({ message: '保存成功', type: 'success' })
}

onMounted(() => {
  loadGameOptions()
  initTierList()
})
</script>

<template>
  <div class="box">
    <div class="box-content">
      <div class="activity">
        <div class="title">GalGame's TierMaker</div>
        <div class="time">2024-10-16 ~ 永久</div>
      </div>
      <div class="feature">
        <TitleComponent>
          <template #title> Tier </template>
        </TitleComponent>
        <div class="feature-box">
          <el-button @click="addRow()" :disabled="ranks.length >= 9">
            AddRow
            <el-icon style="margin-left: 0.1875rem">
              <Plus />
            </el-icon>
          </el-button>
          <el-button @click="resetTier()">
            Reset
            <el-icon style="margin-left: 0.1875rem">
              <Refresh />
            </el-icon>
          </el-button>
          <el-button @click="clearAll()">
            clearAll
            <el-icon style="margin-left: 0.1875rem">
              <Delete />
            </el-icon>
          </el-button>
          <el-button @click="saveRecord()">
            Save
            <el-icon style="margin-left: 0.1875rem">
              <Upload />
            </el-icon>
          </el-button>
          <!-- <el-button type="primary" @click="download(tierRef)">
            download
            <el-icon>
              <Download />
            </el-icon>
          </el-button> -->
        </div>
      </div>
      <div class="tier" v-if="isFinishedLoading">
        <div class="tier-row" v-for="i in ranks.length" :key="i">
          <div
            class="tier-rank"
            :style="{ backgroundColor: tierColors[i - 1] }"
          >
            {{ ranks[i - 1] }}
          </div>
          <VueDraggable
            class="tier-content"
            group="subject"
            v-model="tierList[i - 1]"
            :animation="50"
          >
            <div v-for="subject in tierList[i - 1]" :key="subject.subjectId">
              <img
                :src="subject.imgUrl"
                class="select-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </VueDraggable>
          <div class="tier-btn" data-html2canvas-ignore="true">
            <div class="btn-tools btn" @click="openToolsDialog(i)">
              <el-icon>
                <Tools />
              </el-icon>
            </div>
            <div class="btn-arrow btn" @click="rowUp(i - 1)">
              <el-icon>
                <ArrowUpBold />
              </el-icon>
            </div>
            <div class="btn-arrow btn" @click="rowDown(i - 1)">
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
          <template #title> Select </template>
        </TitleComponent>
        <div class="select-content">
          <div class="search-box">
            <el-input
              class="search"
              placeholder="请输入GalGame名称"
              v-model="searchName"
              @keyup.enter="searchGames()"
              style="margin-left: 0.3125rem"
              clearable
            >
              <template #suffix>
                <el-icon @click="searchGames()">
                  <search />
                </el-icon>
              </template>
            </el-input>
          </div>
          <VueDraggable
            class="select-list"
            group="subject"
            v-model="galGameList"
            :animation="50"
            v-if="galGameList.length > 0"
          >
            <div v-for="galgame in galGameList" :key="galgame.subjectId">
              <img
                :src="galgame.imgUrl"
                class="select-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </VueDraggable>
          <div v-else>
            <el-empty :image-size="200" />
          </div>
          <div class="page" v-if="galGameList.length > 0">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="searchTotal"
              :page-size="page.pageSize"
              v-model:current-page="page.pageNo"
              @current-change="loadGameOptions()"
              class="pagination"
            />
          </div>
        </div>
      </div>
    </div>

    <el-dialog v-model="toolsDialogVisible" width="300" align-center>
      <div class="toolsBox">
        <div style="grid-column: span 2">
          <el-input :rows="1" v-model="ranks[tierToolsIndex]" type="textarea" />
        </div>

        <el-button @click="clearRow()"> Clear Row </el-button>
        <el-button @click="deleteRow()"> Delete Row </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style scoped>
.box {
  margin-top: 3.5rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 2rem 13rem 2rem 13rem;
}

.box-content {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
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
    margin-top: 0.5rem;
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
  border-top: 0.0625rem solid pink;
  border-left: 0.0625rem solid pink;
  border-right: 0.0625rem solid pink;
}

.tier-row:last-of-type {
  border-bottom: 0.0625rem solid pink;
}

.tier-rank {
  display: grid;
  padding: 0.1rem 0.2rem 0.1rem 0.2rem;
  place-items: center;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  border-right: 0.0625rem solid pink;
  word-break: break-word;
}

.tier-content {
  display: flex;
  flex-wrap: wrap;
}

.tier-btn {
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  padding: 0 0.5rem 0 0.5rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  border-left: 0.0625rem solid pink;
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
  color: white;
}

.btn:hover {
  color: #999;
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

.toolsBox {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  gap: 1rem;
}

:deep(.el-input__wrapper) {
  outline: 0.125rem solid pink !important;
  border-radius: 1.25rem !important;
}

.select:deep(
    .el-pagination.is-background .el-pager li:not(.is-disabled).is-active
  ) {
  background-color: pink !important;
}

:deep(.el-pagination.is-background .el-pager li) {
  background-color: white !important;
}

:deep(.el-pagination.is-background button) {
  background-color: white !important;
}
</style>
