import type { GalGame, GalGameSearchByNameRequest, GalGameSearchByTranslatedNameRequest } from '@/types/general/galgame'
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

export const getGalGameSearchByNameTotalAPI = (data: GalGameSearchByNameRequest): Promise<Data<number>> => {
  return request({
    url: '/galgame/searchByName/total',
    method: 'POST',
    data
  }).then(res => res.data as Data<number>)
}

export const getGalGameSearchByNameListAPI = (data: GalGameSearchByNameRequest): Promise<Data<GalGame[]>> => {
  return request({
    url: '/galgame/searchByName/list',
    method: 'POST',
    data
  }).then(res => res.data as Data<GalGame[]>)
}