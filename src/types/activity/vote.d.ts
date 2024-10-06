import type { Page } from '@/types/page'
import type { GalGame } from '../galgame'

export type GalGameVoteItemSearchParams = Page & {
  searchName: string
}

export type GalGameVoteItemSearch = {
  subjectId: number,
  name: string,
  totalVote: number,
  url: string
}

export type GalGameVoteResult = GalGame & {
  myVote: number,
  myRank: number,
}

export type GalGameSearchTotalParams = {
  name: string
}