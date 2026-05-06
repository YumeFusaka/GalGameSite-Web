export type LoginRequest = {
  uin: string
}

export type LoginResponse = {
  token: string
  nick: string
}

export type UserProfile = {
  id: number
  uin: string
  gender: string
  nick: string
  card: string
  joinTime: string
  generation: number
  role: string
}
