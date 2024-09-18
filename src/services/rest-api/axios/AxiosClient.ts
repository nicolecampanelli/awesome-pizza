import axios from 'axios'

const X_DOMAIN = ''

const handleError = async (error: any): Promise<any> => {
  if (error.response) {
    const { status, data } = error.response;

    switch (status) {
      case 401:
        console.error(`Error 401 ${status}: ${data}`);
      case 403:
        console.error(`Error 403 ${status}: ${data}`);
        break;
      default:
        console.error(`Error ${status}: ${data}`);
    }
  } else if (error.request) {
    console.error('No response received');
  } else {
    console.error('Error', error.message);
  }

  return await Promise.reject(error);
};

export const RestApiClient = axios.create({
  withCredentials: true,
  headers: {
    'X-Domain': X_DOMAIN
  }
})

RestApiClient.interceptors.request.use((config: any) => {
  return config
})

RestApiClient.interceptors.response.use(
  async (response: any) => await Promise.resolve(response),
  async (error: any) => await handleError(error)
)

export const RestApiNoCredentialClient = axios.create({
  withCredentials: false,
  headers: {
    'X-Domain': X_DOMAIN
  }
})

RestApiNoCredentialClient.interceptors.request.use((config: any) => {
  return config
})

RestApiNoCredentialClient.interceptors.response.use(
  async (response: any) => await Promise.resolve(response),
  async (error: any) => await handleError(error)
)
