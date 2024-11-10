import type { GalGameTierMakerRecordRequest, GalGameTierMakerRecordResponse } from '@/types/activity/galGameTierMaker'
import request from '@/utils/axios'
import type { Data } from '@/utils/axios'

export const getGalGameTierMakerRecordAPI = (): Promise<Data<GalGameTierMakerRecordResponse>> => {
  return request({
    url: '/activity/galgame-tier-maker/record',
    method: 'GET',
  }).then(res => res.data as Data<GalGameTierMakerRecordResponse>)
}

export const postGalGameTierMakerRecordAPI = (data: GalGameTierMakerRecordRequest): Promise<Data<string>> => {
  return request({
    url: '/activity/galgame-tier-maker/record',
    method: 'POST',
    data
  }).then(res => res.data as Data<string>)
}

