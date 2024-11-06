import type { GalGame, GalGameSearchByTranslatedNameRequest } from '@/types/general/galgame'
import request from '@/utils/axios'
import type { Data } from '@/utils/axios'

export const getGalGameTotalAPI = (): Promise<Data<number>> => {
  return request({
    url: '/galgame/total',
    method: 'GET',
  }).then(res => res.data as Data<number>)
}

export const getGalGameSearchByTranslatedNameTotalAPI = (data: GalGameSearchByTranslatedNameRequest): Promise<Data<number>> => {
  return request({
    url: '/galgame/searchByTranslatedName/total',
    method: 'POST',
    data
  }).then(res => res.data as Data<number>)
}

export const getGalGameSearchByTranslatedNameListAPI = (data: GalGameSearchByTranslatedNameRequest): Promise<Data<GalGame[]>> => {
  return request({
    url: '/galgame/searchByTranslatedName/list',
    method: 'POST',
    data
  }).then(res => res.data as Data<GalGame[]>)
}