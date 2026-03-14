<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {
  getGalGameTwelveVotingResultListAPI,
  getGalGameTwelveVotingGameInfoListAPI,
  getGalGameTwelveVotingVotesCastCountTotalAPI,
  getGalGameTwelveVotingHistoryListAPI,
  getGalGameTwelveVotingGameInfoByMyselfAPI,
  postGalGameTwelveVotingInitiateVoteAPI
} from '@/apis/activity/galGameTwelveVoting'

import { getMyVoteNumberAPI, setMyVoteNumberAPI } from '@/apis/activity/galGameTwelveVoteNumber'

import TitleComponent from '@/components/TitleComponent.vue'
import { Search } from '@element-plus/icons-vue'
import { useWindowStore } from '@/stores'

import type { Page } from '@/types/general/page'
import type {
  Edition,
  GalGameTwelveVotingGameInfoByMyselfResponse,
  GalGameTwelveVotingGameInfoResponse,
  GalGameTwelveVotingHistoryResponse,
  GalGameTwelveVotingResultResponse
} from '@/types/activity/galGameTwelveVoting'

import { getGalGameSearchByTranslatedNameTotalAPI } from '@/apis/general/galgame'

const windowStore = useWindowStore()

/* ---------------- edition ---------------- */

const edition = ref<number>(2)

/* ---------------- 数据 ---------------- */

const galGameTwelveVotingGameInfoList = ref<GalGameTwelveVotingGameInfoResponse[]>([])
const galGameTwelveVotingResultList = ref<GalGameTwelveVotingResultResponse[]>([])
const galGameTwelveVotingHistoryList = ref<GalGameTwelveVotingHistoryResponse[]>([])

const votesCastCountTotal = ref(0)
const searchTotal = ref(0)

const voteNumTotal = ref(0)

const srcollIndex = ref(0)

const searchName = ref('')

const page = ref<Page>({
  pageNo: 1,
  pageSize: 20
})

/* ---------------- 投票弹窗 ---------------- */

const voteDialogVisible = ref(false)

const galGameVoteDialogInfo = ref<GalGameTwelveVotingGameInfoByMyselfResponse | null>(null)

const setVote = ref(0)

/* ---------------- 票数设置弹窗 ---------------- */

const voteNumberDialogVisible = ref(false)

const galgameCount = ref(0)

/* ---------------- 数据请求 ---------------- */

const getGameList = async () => {
  const res = await getGalGameTwelveVotingGameInfoListAPI(
    { ...page.value, translatedName: searchName.value },
    edition.value
  )

  galGameTwelveVotingGameInfoList.value = res.data

  const totalRes = await getGalGameSearchByTranslatedNameTotalAPI({
    ...page.value,
    translatedName: searchName.value
  })

  searchTotal.value = totalRes.data
}

const getResultList = async () => {
  const res = await getGalGameTwelveVotingResultListAPI(edition.value)
  galGameTwelveVotingResultList.value = res.data
}

const getVotesTotal = async () => {
  const res = await getGalGameTwelveVotingVotesCastCountTotalAPI(edition.value)
  votesCastCountTotal.value = res.data
}

const getHistoryList = async () => {
  const res = await getGalGameTwelveVotingHistoryListAPI(edition.value)
  galGameTwelveVotingHistoryList.value = res.data
}

/* ---------------- 刷新所有数据 ---------------- */

const refreshAll = () => {
  getGameList()
  getResultList()
  getVotesTotal()
  getHistoryList()
}

/* ---------------- 搜索 ---------------- */

const searchGame = () => {
  page.value.pageNo = 1
  getGameList()
}

/* ---------------- 投票弹窗 ---------------- */

const openVoteDialog = async (subjectId: number) => {
  const res = await getGalGameTwelveVotingGameInfoByMyselfAPI(
    { subjectId },
    edition.value
  )

  galGameVoteDialogInfo.value = res.data

  setVote.value = res.data.votesCastCount ?? 0

  voteDialogVisible.value = true
}

/* ---------------- 投票 ---------------- */

const submitVote = async () => {
  if (!galGameVoteDialogInfo.value) return

  await postGalGameTwelveVotingInitiateVoteAPI(
    {
      subjectId: galGameVoteDialogInfo.value.subjectId,
      votesCastCount: setVote.value
    },
    edition.value
  )

  voteDialogVisible.value = false

  refreshAll()
}

/* ---------------- 设置票数 ---------------- */

const submitVoteNumber = async () => {
  const calculatedVotes = Math.floor(20 + galgameCount.value / 2)
  await setMyVoteNumberAPI(edition.value, calculatedVotes)
  voteNumTotal.value = calculatedVotes
  voteNumberDialogVisible.value = false
  refreshAll()
}

const editionOptions = ref([
  { label: '第一届', value: 1 },
  { label: '第二届', value: 2 }
  // 根据需要继续添加
])

const timeShow = ref([
  '2024-10-8 ~ 2024-10-15',
  '2026-03-13 ~ 2026-03-20',
])

const tipShow = ref([
  ' 活动须知: 投票前请先登录，登录账号已绑定米娜桑的QQ号，只需输入QQ号即可完成登录。 每人拥有30张票，每张票可投给任意一个作品，每个作品最多可以投5票，支持退票重选。投票截止时间为2024年10月15日，最终排名以投票结果为准。',
  ' 活动须知: 投票前请先登录，登录账号已绑定米娜桑的QQ号，只需输入QQ号即可完成登录。 每人拥有20+X/2张票，每张票可投给任意一个作品，每个作品最多可以投5票，支持退票重选。投票截止时间为2026年3月20日，最终排名以投票结果为准。 '
])

const changeEdition = async (value: number) => {
  edition.value = value
  page.value.pageNo = 1

  // 获取当前用户的票数
  const res = await getMyVoteNumberAPI(value)
  voteNumTotal.value = res.data

  if (voteNumTotal.value === 0) {
    voteNumberDialogVisible.value = true
  } 
  refreshAll()
}

/* ---------------- 轮播 ---------------- */

const changeScroll = (current: number) => {
  srcollIndex.value = current
}

/* ---------------- 生命周期 ---------------- */

onMounted(async () => {
  // 获取当前用户的票数
  const res = await getMyVoteNumberAPI(edition.value)
  voteNumTotal.value = res.data

  if (voteNumTotal.value === 0) {
    voteNumberDialogVisible.value = true
  }
  refreshAll()
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
          {{ timeShow[edition - 1] }}
        </div>

        <!-- 届数选择 -->
        <div class="edition-select">
          <span>选择届数：</span>
          <el-select v-model="edition" placeholder="请选择届数" @change="changeEdition" style="width: 8rem">
            <el-option v-for="item in editionOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
      </div>
      <div class="rank">
        <TitleComponent style="">
          <template v-slot="title">
            实时排行
          </template>
        </TitleComponent>
        <div class="rank-content" v-if="galGameTwelveVotingResultList.length > 0">
          <div class="scroll">
            <div class="scroll-image">
              <el-carousel :interval="4000" :type="windowStore.windowSize >= 900 ? `card` : ` `" height="20rem"
                @change="changeScroll" indicator-position="none">
                <el-carousel-item v-for="i in Math.min(12, galGameTwelveVotingResultList.length)" :key="i">
                  <img :src="galGameTwelveVotingResultList[i - 1].imgUrl" class="image" />
                </el-carousel-item>
              </el-carousel>
            </div>

            <div class="scroll-describe">
              <div class="scroll-name">{{ galGameTwelveVotingResultList[srcollIndex].translatedName }}</div>
              <div calss="scroll-rank">No.{{ srcollIndex + 1 }}</div>
            </div>

            <div class="tip">
              {{ tipShow[edition - 1] }}
            </div>
          </div>

          <div class="static">
            <div class="static-row">
              <div class="static-icon"></div>
              <div class="static-name">Name</div>
              <div class="static-score">Votes</div>
            </div>
            <div v-for="i in Math.min(12, galGameTwelveVotingResultList.length)" :key="i" class="static-row">
              <div class="static-icon">{{ i }}</div>
              <div class="static-name">{{ galGameTwelveVotingResultList[i - 1].translatedName }}</div>
              <div class="static-score"> {{ galGameTwelveVotingResultList[i - 1].totalVotes }}</div>
            </div>
          </div>
        </div>
      </div>
      <el-divider class="divider" />
      <div class="vote">
        <TitleComponent style="margin-bottom: 1.25rem;">
          <template v-slot="title">
            投票列表
          </template>
        </TitleComponent>
        <div class="vote-content">
          <div class="search-box">
            <div class="remainder">你还有 <span style="color: #ff6600; font-weight: bold;font-size: large;">{{ voteNumTotal -
              votesCastCountTotal
                }}</span>
              票喵～(∠・ω< )⌒★</div>
                <el-input class="search" placeholder="请输入GalGame名称" v-model="searchName"
                  @keyup.enter.native="searchGame()" style="margin-left: .3125rem;" clearable>
                  <template #suffix>
                    <el-icon @click="searchGame()">
                      <search />
                    </el-icon>
                  </template>
                </el-input>
            </div>
            <div class="vote-list" v-if="galGameTwelveVotingGameInfoList.length > 0">
              <el-card v-for="galgame in galGameTwelveVotingGameInfoList" :key="galgame.subjectId" class="card"
                shadow="hover" style="max-width: 30rem">
                <template #header>
                  <el-text size="large" line-clamp="1" style="padding: 0 1rem;color: #ff9ab5">{{ galgame.translatedName
                    }}</el-text>
                </template>
                <img :src="galgame.imgUrl" class="vote-img" />
                <template #footer>
                  <div class="vote-footer">
                    <el-button type="danger" style="background-color: #ff9ab5;"
                      @click="openVoteDialog(galgame.subjectId)">投票</el-button>
                    <span>{{ galgame.totalVotes }} votes</span>
                  </div>
                </template>
              </el-card>
            </div>
            <div v-else>
              <el-empty :image-size="200" />
            </div>
            <div class="page" v-if="galGameTwelveVotingGameInfoList.length > 0">
              <el-pagination background layout="prev, pager, next" :total="searchTotal" :page-size="page.pageSize"
                v-model:current-page="page.pageNo" @current-change="getGameList()" class="pagination" />
            </div>
          </div>
        </div>
        <el-divider class="divider" />
        <div class="history">
          <TitleComponent style="">
            <template v-slot="title">
              投票记录
            </template>
          </TitleComponent>
          <div v-if="galGameTwelveVotingHistoryList.length > 0" class="vote-list" style="margin-top: 1.25rem;">
            <el-card v-for="galgame in galGameTwelveVotingHistoryList" :key="galgame.subjectId" class="card"
              shadow="hover" style="max-width: 30rem">
              <template #header>
                <el-text size="large" line-clamp="1" style="padding: 0 1rem;">{{ galgame.translatedName }}</el-text>
              </template>
              <img :src="galgame.imgUrl" class="vote-img" />
              <template #footer>
                <div class="vote-footer">
                  <el-rate v-model="galgame.votesCastCount" size="large" show-score text-color="#ff9900"
                    score-template="{value} votes" disabled />
                </div>
              </template>
            </el-card>
          </div>
          <el-empty :image-size="200" v-else />
        </div>
      </div>

      <el-dialog v-model="voteDialogVisible" title="投票面板" width="auto" align-center class="vote-dialog">
        <div class="dialog-box">
          <img :src="galGameVoteDialogInfo?.imgUrl" />
          <div> Name: <span>{{ galGameVoteDialogInfo?.translatedName }}</span></div>
          <div v-if="galGameVoteDialogInfo?.originalName"> Nick: <span>{{ galGameVoteDialogInfo?.originalName }}</span>
          </div>
          <div> Info: <span>{{ galGameVoteDialogInfo?.info }}</span> </div>
          <div class="Vote-Rank">
            <div>Votes: <span>{{ galGameVoteDialogInfo?.totalVotes ? galGameVoteDialogInfo?.totalVotes : 'N/A' }}</span>
            </div>
            <div style="margin-left: 4.125rem;"> Rank: <span>{{ galGameVoteDialogInfo?.totalRank ?
              galGameVoteDialogInfo?.totalRank
              : 'N/A' }}</span> </div>
          </div>
          <el-slider v-model="setVote" :min="0" :max="5" style="width: 20rem" />
        </div>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="voteDialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="submitVote()"
              :disabled="setVote == galGameVoteDialogInfo?.votesCastCount">
              Confirm
            </el-button>
          </div>
        </template>
      </el-dialog>

      <el-dialog v-model="voteNumberDialogVisible" title="票前提问" width="auto" align-center>
        <div class="dialog-box">
          <p>请输入你玩过的GalGame数量：</p>
          <el-input-number v-model="galgameCount" :min="0" :max="1000" style="width: 20rem" />
          <p style="color: red; margin-top: 1rem;">确定后不可变更</p>
        </div>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="voteNumberDialogVisible = false">取消</el-button>
            <el-button type="primary" @click="submitVoteNumber()">确认</el-button>
          </div>
        </template>
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
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
  padding: 2rem 4rem 2rem 4rem;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto;
  row-gap: 3rem;
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

  .edition-select {
    margin-top: 1rem;
    text-align: center;
    font-size: 1.1rem;
    color: #444;
  }

  .edition-select span {
    margin-right: 0.5rem;
    font-weight: 500;
    color: #eb2f96;
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
  display: grid;
  grid-template-rows: auto;
  row-gap: .625rem;

  .image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.scroll-describe {
  padding: 0 6.25rem;
  display: grid;
  grid-template-rows: auto;
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
  grid-template-rows: repeat(13, minmax(0.8rem, auto));
  row-gap: 0.5rem;
}

.static-row {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  column-gap: 1.25rem;
  align-items: center;
  justify-items: center;
  text-align: center;
}

.tip {
  padding: 0.8rem 1rem 0.8rem 1rem;
  box-sizing: border-box;
  height: auto;
  width: 100%;

  border-radius: .3125rem;
  background-color: #f9c6cf46;
  border-left: 0.425rem solid hwb(359 78% 2%);

  line-height: 1.8rem;
  font-size: 1rem;
  font-weight: 400;
  color: #444;
}

.divider {
  margin: 0;
  width: 100% !important;
  background-color: pink !important;
  border-radius: 1rem !important;
  height: 0.2rem !important;
}

.vote-content {
  display: grid;
  grid-template-rows: auto;
  row-gap: 1.5rem;
}

.vote-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
}

.vote-img {
  width: 100%;
  height: 18rem;
}

.card {
  border-radius: 0.5rem;
}

.vote-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.remainder {
  height: auto;
  padding: 0.625rem;
  box-sizing: border-box;
  text-align: center;
  border-radius: .3125rem;
  background-color: #f9c6cf46;
  border-left: 0.425rem solid hwb(359 78% 2%);
  font-weight: 400;
}

.search {
  width: 25rem;
  height: 3.125rem;
}

:deep(.el-input__wrapper) {
  outline: 0.125rem solid pink !important;
  border-radius: 1.25rem !important;
}

.el-card :deep(.el-card__body) {
  padding: 0;
}


.el-card :deep(.el-card__header) {
  padding: 0.5rem;
  text-align: center;
}

.el-card :deep(.el-card__footer) {
  padding: 0.5rem;
  text-align: center;
}

.page {
  display: flex;
}

.pagination {
  margin: 0 auto;
}

.vote-dialog {
  border-radius: 1.25rem;
}

.dialog-box {
  display: grid;
  width: 25rem;
  padding: 0 1.25rem;
  box-sizing: border-box;
  row-gap: .3125rem;
  grid-template-rows: repeat(auto, 1fr);
  text-align: center;
  justify-items: center;
  font-size: 0.9rem;
  font-weight: 400;

  color: #999;

  .Vote-Rank {
    display: flex;

    span {
      font-size: 1.2rem;
    }
  }

  span {
    font-weight: 500;
    font-size: 1rem;
    color: #ff8daf;
  }

  img {
    width: 20rem;
    height: 20rem;
    object-fit: cover;
  }
}

.vote:deep(.el-pagination.is-background .el-pager li:not(.is-disabled).is-active) {
  background-color: pink !important;
}

:deep(.el-pagination.is-background .el-pager li) {
  background-color: white !important;
}

:deep(.el-pagination.is-background button) {
  background-color: white !important;
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

@media (max-width: 600px) {
  .vote-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
