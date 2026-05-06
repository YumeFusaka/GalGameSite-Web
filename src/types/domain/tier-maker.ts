export type TierMakerSubject = {
  subjectId: number
  imgUrl: string
}

export type TierMakerRecord = {
  rankNames: string[]
  tiers: TierMakerSubject[][]
}
