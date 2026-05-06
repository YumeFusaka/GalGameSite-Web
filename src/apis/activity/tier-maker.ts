import request, { unwrap } from '@/utils/axios'
import type { ApiResponse } from '@/types/common/api'
import type { TierMakerRecord } from '@/types/domain/tier-maker'

export const getCurrentTierMakerRecord = (): Promise<TierMakerRecord> => {
  return unwrap(
    request({
      url: '/activities/tier-maker/records/me',
      method: 'get'
    }) as Promise<ApiResponse<TierMakerRecord>>
  )
}

export const saveCurrentTierMakerRecord = (payload: TierMakerRecord): Promise<string> => {
  return unwrap(
    request({
      url: '/activities/tier-maker/records/me',
      method: 'put',
      data: payload
    }) as Promise<ApiResponse<string>>
  )
}
