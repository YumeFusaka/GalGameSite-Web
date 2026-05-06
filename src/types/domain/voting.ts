import type { Game, GameQuery } from '@/types/domain/game'

export type VotingGameQuery = GameQuery & {
  translatedName?: string
}

export type VotingGameListItem = {
  subjectId: number
  translatedName: string
  totalVotes: number
  imgUrl: string
}

export type VotingResult = Game & {
  totalVotes: number
  totalRank: number
}

export type VotingRecord = {
  id: number
  subjectId: number
  translatedName: string
  imgUrl: string
  votesCastCount: number
}

export type VoteBallot = VotingResult & {
  votesCastCount: number
  edition: number
}

export type VoteSubmission = {
  subjectId: number
  votesCastCount: number
}

export type VoteQuota = {
  edition: number
  totalVotes: number
}

export type VoteSummary = {
  edition: number
  usedVotes: number
}
