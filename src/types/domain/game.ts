import type { PageRequest } from '@/types/common/api'

export type Game = {
  id: number
  translatedName: string
  originalName: string
  info: string
  score: number
  rank: number
  subjectId: number
  numberOfRatings: string
  imgUrl: string
}

export type GameQuery = PageRequest & {
  keyword?: string
  translatedName?: string
}
