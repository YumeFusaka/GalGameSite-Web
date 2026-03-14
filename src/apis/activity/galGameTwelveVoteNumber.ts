import request from '@/utils/axios'
import type { Data } from '@/utils/axios'

// 获取当前用户的票数
export const getMyVoteNumberAPI = (edition: number): Promise<Data<number>> => {
  return request({
    url: '/activity/galgame-twelve-vote-number/my-vote-number',
    method: 'GET',
    params: { edition }
  }).then(res => res.data as Data<number>)
}

// 设置当前用户的票数
export const setMyVoteNumberAPI = (edition: number, number: number): Promise<Data<string>> => {
  return request({
    url: '/activity/galgame-twelve-vote-number/set-vote-number',
    method: 'POST',
    params: { edition, number }
  }).then(res => res.data as Data<string>)
}