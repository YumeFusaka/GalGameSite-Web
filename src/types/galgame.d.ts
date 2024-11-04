export type GalGame = {
  name: string,
  nick: string,
  info: string,
  score: number,
  rank: number,
  subjectId: number,
  votes: string,
  url: string
}

export type GalGameSearchParams = {
  pageNo: number,
  pageSize: number,
  searchName: string
}