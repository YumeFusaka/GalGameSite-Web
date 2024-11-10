export type GalGameTierMakerSubject = {
  subjectId: number,
  imgUrl: string
}

export type GalGameTierMakerRecordRequest = {
  rankNameList: string[],
  rankSubjectList: GalGameTierMakerSubject[][]
}

export type GalGameTierMakerRecordResponse = {
  rankNameList: string[],
  rankSubjectList: GalGameTierMakerSubject[][]
}