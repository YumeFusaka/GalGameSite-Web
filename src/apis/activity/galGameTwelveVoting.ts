import type {
  GalGameTwelveVotingGameInfoByMyselfResponse,
  GalGameTwelveVotingGameInfoResponse,
  GalGameTwelveVotingHistoryResponse,
  GalGameTwelveVotingInitiateVoteRequest,
  GalGameTwelveVotingResultResponse,
} from '@/types/activity/galGameTwelveVoting'
import type { GalGameSearchBySubjectIdRequest, GalGameSearchByTranslatedNameRequest } from '@/types/general/galgame'
import request from '@/utils/axios'
import type { Data } from '@/utils/axios'

// 获取GalGame投票列表
export const getGalGameTwelveVotingGameInfoListAPI = (
  data: GalGameSearchByTranslatedNameRequest,
  edition: number
): Promise<Data<GalGameTwelveVotingGameInfoResponse[]>> => {
  return request({
    url: '/activity/galgame-twelve-voting/game-info/list',
    method: 'POST',
    data: data,
    params: { edition }
  }).then(res => res.data as Data<GalGameTwelveVotingGameInfoResponse[]>)
}

// 获取GalGame投票结果
export const getGalGameTwelveVotingResultListAPI = (
  edition: number
): Promise<Data<GalGameTwelveVotingResultResponse[]>> => {
  return request({
    url: '/activity/galgame-twelve-voting/result/list',
    method: 'GET',
    params: { edition }
  }).then(res => res.data as Data<GalGameTwelveVotingResultResponse[]>)
}

// 获取本人GalGame投票历史
export const getGalGameTwelveVotingHistoryListAPI = (
  edition: number
): Promise<Data<GalGameTwelveVotingHistoryResponse[]>> => {
  return request({
    url: '/activity/galgame-twelve-voting/history/list',
    method: 'GET',
    params: { edition }
  }).then(res => res.data as Data<GalGameTwelveVotingHistoryResponse[]>)
}

// 获取本人已投的总票数
export const getGalGameTwelveVotingVotesCastCountTotalAPI = (
  edition: number
): Promise<Data<number>> => {
  return request({
    url: '/activity/galgame-twelve-voting/votes-cast-count/total',
    method: 'GET',
    params: { edition }
  }).then(res => res.data as Data<number>)
}

// 获取作品信息与投票数
export const getGalGameTwelveVotingGameInfoByMyselfAPI = (
  data: GalGameSearchBySubjectIdRequest,
  edition: number
): Promise<Data<GalGameTwelveVotingGameInfoByMyselfResponse>> => {
  return request({
    url: '/activity/galgame-twelve-voting/game-info/by-myself',
    method: 'POST',
    data: data,
    params: { edition }
  }).then(res => res.data as Data<GalGameTwelveVotingGameInfoByMyselfResponse>)
}

// 发起投票
export const postGalGameTwelveVotingInitiateVoteAPI = (
  data: GalGameTwelveVotingInitiateVoteRequest,
  edition: number
): Promise<Data<GalGameTwelveVotingInitiateVoteRequest>> => {
  return request({
    url: '/activity/galgame-twelve-voting/initiate-vote',
    method: 'POST',
    data: data,
    params: { edition }
  }).then(res => res.data as Data<GalGameTwelveVotingInitiateVoteRequest>)
}