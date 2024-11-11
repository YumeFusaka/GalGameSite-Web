export type LoginParams = {
  uin: string;
}

export type LoginResult = {
  token: string;
  nick: string
}

export type UserInfoResponse = {
  id: number;
  uin: string;
  gender: string;
  nick: string;
  card: string;
  joinTime: Date;
  generation: string;
  role: string;
}