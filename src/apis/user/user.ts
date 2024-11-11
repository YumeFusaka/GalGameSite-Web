
import type { LoginParams, LoginResult, UserInfoResponse } from '@/types/user/user'
import request from '@/utils/axios'
import type { Data } from '@/utils/axios'

export const loginAPI = (data: LoginParams): Promise<Data<LoginResult>> => {
  return request({
    url: '/user/login',
    method: 'post',
    data
  }).then(res => res.data as Data<LoginResult>)
}

export const getUserInfoAPI = (): Promise<Data<UserInfoResponse>> => {
  return request({
    url: '/user/info',
    method: 'GET'
  }).then(res => res.data as Data<UserInfoResponse>)
}
