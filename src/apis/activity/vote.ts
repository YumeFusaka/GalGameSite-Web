
import type {
  GalGameSearchTotalParams, GalGameVoteHistory, GalGameVoteItemSearch, GalGameVoteItemSearchParams,
  GalGameVoteResult, GalGameVoteResultByUser, galGameVoteResultByUserParams, GalGameVoteSubmitParams
} from '@/types/activity/vote'
import request from '@/utils/axios'
import type { Data } from '@/utils/axios'

export const galGameVoteItemSearchAPI = (data: GalGameVoteItemSearchParams): Promise<Data<GalGameVoteItemSearch[]>> => {
  return request({
    url: '/user/activity/galGameVoteItemSearch/list',
    method: 'post',
    data
  }).then(res => res.data as Data<GalGameVoteItemSearch[]>)
}

export const galGameVoteResultAPI = (): Promise<Data<GalGameVoteResult[]>> => {
  return request({
    url: '/user/activity/galGameVoteResult/list',
    method: 'get'
  }).then(res => res.data as Data<GalGameVoteResult[]>)
}

export const galGameVoteByUseCountAPI = (): Promise<Data<number>> => {
  return request({
    url: '/user/activity/galGameVoteByUseCount',
    method: 'get'
  }).then(res => res.data as Data<number>)
}

export const galGameSearchTotalAPI = (data: GalGameSearchTotalParams): Promise<Data<number>> => {
  return request({
    url: '/user/galGame/total',
    method: 'post',
    data
  }).then(res => res.data as Data<number>)
}

export const galGameVoteHistoryAPI = (): Promise<Data<GalGameVoteHistory[]>> => {
  return request({
    url: '/user/activity/galGameVoteHistory/list',
    method: 'get'
  }).then(res => res.data as Data<GalGameVoteHistory[]>)
}

export const galGameVoteResultByUserAPI = (data: galGameVoteResultByUserParams): Promise<Data<GalGameVoteResultByUser>> => {
  return request({
    url: '/user/activity/galGameVoteResultByUser',
    method: 'post',
    data
  }).then(res => res.data as Data<GalGameVoteResultByUser>)
}

export const galGameVoteSubmitAPI = (data: GalGameVoteSubmitParams): Promise<Data<string>> => {
  return request({
    url: '/user/activity/galGameVoteSubmit',
    method: 'post',
    data
  }).then(res => res.data as Data<string>)
}