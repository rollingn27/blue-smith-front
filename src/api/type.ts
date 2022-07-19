export type User = {
  email: string
  nickname: string
  part?: number
  admin: number
}

export type Board = {
  boardNum : number
  userId : string
  wDate : Date
  title : string
  content : string
  hitNum : number

}