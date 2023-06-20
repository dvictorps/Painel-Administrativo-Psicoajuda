import { env } from '../config/env'

import axios from 'axios'
export const api = axios.create({
    baseURL: env.BASE_URL_API,
    timeout: 7000,
})

api.interceptors.request.use(async config => {
    // if (
    //   !config?.url?.endsWith('/auth/signin-driver') &&
    //   !config?.url?.endsWith('/auth/signupDriver') &&
    //   !config?.url?.endsWith('/auth/mail-driver-verify') &&
    //   !config?.url?.endsWith('/auth/verify-code-driver') &&
    //   !config?.url?.endsWith('/auth/recovery-password-driver')
    // ) {
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   const storedData: any = await AsyncStorage.get(AsyncStorageKeysEnum.USER)

    //   if (config?.url?.endsWith('/auth/refresh-token-driver')) {
    //     config.headers['x-refresh-token'] = `Bearer ${storedData.refreshToken}`
    //   } else {
    //     config.headers.Authorization = `Bearer ${storedData.token}`
    //   }
    // }

    return config
})
