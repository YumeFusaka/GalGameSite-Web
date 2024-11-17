import type { Member } from '@/types/general/member'
import request from '@/utils/axios'
import type { Data } from '@/utils/axios'

export const getMemberListAPI = (): Promise<Data<Member[]>> => {
  return request({
    url: '/member/list',
    method: 'GET',
  }).then(res => res.data as Data<Member[]>)
}