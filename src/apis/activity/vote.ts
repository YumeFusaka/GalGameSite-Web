
import type { GalGameSearchTotalParams, GalGameVoteItemSearch, GalGameVoteItemSearchParams, GalGameVoteResult } from '@/types/activity/vote'
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