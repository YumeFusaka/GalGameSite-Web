import request, { unwrap } from '@/utils/axios'
import type { UserProfile, LoginRequest, LoginResponse } from '@/types/domain/user'
import type { ApiResponse } from '@/types/common/api'

export const createSession = (payload: LoginRequest): Promise<LoginResponse> => {
  return unwrap(
    request({
      url: '/users/sessions',
      method: 'post',
      data: payload
    }) as Promise<ApiResponse<LoginResponse>>
  )
}

export const getCurrentUserProfile = (): Promise<UserProfile> => {
  return unwrap(
    request({
      url: '/users/me',
      method: 'get'
    }) as Promise<ApiResponse<UserProfile>>
  )
}

export const listUsers = (): Promise<UserProfile[]> => {
  return unwrap(
    request({
      url: '/users',
      method: 'get'
    }) as Promise<ApiResponse<UserProfile[]>>
  )
}
