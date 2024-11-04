import request from '@/utils/axios'
import type { Data } from '@/utils/axios'

import type { GalGameSearchTotalParams } from '@/types/activity/vote'
import type { GalGameSearchParams } from '@/types/galgame'

export const galGameSearchTotalAPI = (data: GalGameSearchTotalParams): Promise<Data<number>> => {
  return request({
    url: '/user/galGame/total',
    method: 'post',
    data
  }).then(res => res.data as Data<number>)
}
export const getGalGameListAPI = (data: GalGameSearchParams): Promise<Data<any[]>> => {
  return request({
    url: '/user/galGame/list',
    method: 'post',
    data
  }).then(res => res.data as Data<any[]>)
}
