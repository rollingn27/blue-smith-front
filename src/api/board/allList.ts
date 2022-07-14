import client from "../client"
import {Board} from "../type"

export async function allList() {
    // export async function signUp({ email, nickname, password, passwordConfirm }: signupInput) {
      const response = await client.post('/user/signUp', { ...input })
      return response.data
    }