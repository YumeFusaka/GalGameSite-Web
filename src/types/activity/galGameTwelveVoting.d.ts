import type { Page } from '@/types/general/page'
import type { GalGame } from '../galgame/galgame'

export type GalGameTwelveVotingGameInfoResponse = {
  subjectId: number,
  translatedName: string,
  totalVotes: number,
  imgUrl: string
}

export type GalGameTwelveVotingResultResponse = GalGame & {
  totalVotes: number,
  totalRank: number,
}

export type GalGameTwelveVotingHistoryResponse = {
  id: number,
  subjectId: number,
  translatedName: string,
  imgUrl: string,
  votesCastCount: number,
}

export type GalGameTwelveVotingGameInfoByMyselfResponse = GalGameTwelveVotingResultResponse & {
  id: number,
  votesCastCount: number
}

export type GalGameTwelveVotingInitiateVoteRequest = {
  subjectId: number,
  votesCastCount: number
}