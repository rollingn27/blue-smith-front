import client from "../client"
import { User } from "../type"

export async function signIn({ email, password }: signInInput) {
  const response = await client.post<signinResult>('/user/signin', { email, password })
  return response.data
}

export type signInInput = {
  email: string
  password: string
}

export type signinResult = {  
  user: User
}
