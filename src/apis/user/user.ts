
import type { LoginParams, LoginResult } from '@/types/user/user'
import request from '@/utils/axios'
import type { Data } from '@/utils/axios'

export const loginAPI = (data: LoginParams): Promise<Data<LoginResult>> => {
  return request({
    url: '/user/login',
    method: 'post',
    data
  }).then(res => res.data as Data<LoginResult>)
}
