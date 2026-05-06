import request, { unwrap } from '@/utils/axios'
import type { ApiResponse, PageResponse } from '@/types/common/api'
import type {
  VoteBallot,
  VoteSubmission,
  VoteSummary,
  VotingGameListItem,
  VotingGameQuery,
  VotingRecord,
  VotingResult,
} from '@/types/domain/voting'

export const listVotingGames = (
  query: VotingGameQuery,
  edition: number
): Promise<PageResponse<VotingGameListItem>> => {
  return unwrap(
    request({
      url: '/activities/twelve-voting/games',
      method: 'get',
      params: { ...query, edition }
    }) as Promise<ApiResponse<PageResponse<VotingGameListItem>>>
  )
}

export const listVotingResults = (edition: number): Promise<VotingResult[]> => {
  return unwrap(
    request({
      url: '/activities/twelve-voting/results',
      method: 'get',
      params: { edition }
    }) as Promise<ApiResponse<VotingResult[]>>
  )
}

export const listCurrentUserVotingRecords = (edition: number): Promise<VotingRecord[]> => {
  return unwrap(
    request({
      url: '/activities/twelve-voting/records/me',
      method: 'get',
      params: { edition }
    }) as Promise<ApiResponse<VotingRecord[]>>
  )
}

export const getCurrentUserVoteSummary = (edition: number): Promise<VoteSummary> => {
  return unwrap(
    request({
      url: '/activities/twelve-voting/summary/me',
      method: 'get',
      params: { edition }
    }) as Promise<ApiResponse<VoteSummary>>
  )
}

export const getCurrentUserBallot = (subjectId: number, edition: number): Promise<VoteBallot> => {
  return unwrap(
    request({
      url: `/activities/twelve-voting/games/${subjectId}/ballot`,
      method: 'get',
      params: { edition }
    }) as Promise<ApiResponse<VoteBallot>>
  )
}

export const submitVote = (
  subjectId: number,
  edition: number,
  payload: VoteSubmission
): Promise<string> => {
  return unwrap(
    request({
      url: `/activities/twelve-voting/games/${subjectId}/ballot`,
      method: 'put',
      params: { edition },
      data: payload
    }) as Promise<ApiResponse<string>>
  )
}
