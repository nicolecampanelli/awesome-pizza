import { IBasicHttpRequest } from "@/interface/services/IHttpRequest"
import { httpGet } from "@/services/rest-api/RestApi.service"

export const getAllPizzas = async (): Promise<any> => {
  const url: string = 'https://awesome-pizza.free.beeceptor.com/api/pizzas'

  const request: IBasicHttpRequest = {
    url,
    withCredentials: false
  }
  return await httpGet(request)
}