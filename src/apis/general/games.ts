import request, { unwrap } from '@/utils/axios'
import type { ApiResponse, PageResponse } from '@/types/common/api'
import type { Game, GameQuery } from '@/types/domain/game'

export const listGames = (query: GameQuery): Promise<PageResponse<Game>> => {
  return unwrap(
    request({
      url: '/games',
      method: 'get',
      params: query
    }) as Promise<ApiResponse<PageResponse<Game>>>
  )
}
