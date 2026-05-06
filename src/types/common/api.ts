export type ApiResponse<T> = {
  code: number
  msg: string
  data: T
}

export type PageRequest = {
  pageNo: number
  pageSize: number
}

export type PageResponse<T> = {
  items: T[]
  total: number
  pageNo: number
  pageSize: number
}
