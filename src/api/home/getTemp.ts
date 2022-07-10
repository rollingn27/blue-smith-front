import client from "../client";

export async function getTemp() {
  const response = await client.get('/test?email=dfsdfdfdfdsf&nickname=sdlfksjdlk&password=324342&grade=1')
  return response.data
}