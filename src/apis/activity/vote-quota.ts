import request, { unwrap } from '@/utils/axios'
import type { ApiResponse } from '@/types/common/api'
import type { VoteQuota } from '@/types/domain/voting'

export const getCurrentVoteQuota = (edition: number): Promise<VoteQuota> => {
  return unwrap(
    request({
      url: '/activities/twelve-voting/quota/me',
      method: 'get',
      params: { edition }
    }) as Promise<ApiResponse<VoteQuota>>
  )
}

export const updateCurrentVoteQuota = (payload: VoteQuota): Promise<string> => {
  return unwrap(
    request({
      url: '/activities/twelve-voting/quota/me',
      method: 'put',
      data: payload
    }) as Promise<ApiResponse<string>>
  )
}
