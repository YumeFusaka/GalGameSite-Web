import type { Page } from "../general/page"

export type GalGame = {
  id: number,
  translatedName: string,
  originalName: string,
  info: string,
  score: number,
  rank: number,
  subjectId: number,
  numberOfRatings: string,
  imgUrl: string
}

export type GalGameSearchByTranslatedNameRequest = Page & {
  translatedName: string
}

export type GalGameSearchBySubjectIdRequest = {
  subjectId: number
}

export type GalGameSearchByNameRequest = Page & {
  name: string
}