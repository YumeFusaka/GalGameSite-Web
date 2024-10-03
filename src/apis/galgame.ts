
import type { GalGame } from '@/types/galgame'
import request from '@/utils/axios'
import type { Data } from '@/utils/axios'

export const getGalGameListAPI = (): Promise<Data<GalGame[]>> => {
  return request({
    url: '/user/galgame/list',
    method: 'post',
  }).then(res => res.data as Data<GalGame[]>)
}