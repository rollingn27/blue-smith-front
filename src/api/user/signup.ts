import client from "../client"
import { User } from "../type"

export async function signUp(input: signupInput) {
// export async function signUp({ email, nickname, password, passwordConfirm }: signupInput) {
  const response = await client.post('/user/signUp', { ...input })                            
  return response.data
}

export type signupInput = {
  email: string
  nickname: string
  password: string
  passwordConfirm: string
}
