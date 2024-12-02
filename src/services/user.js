import $request from '@/axios/index'
// import { catchAxiosError, catchAxiosSuccess } from './response'
import { catchAxiosError } from './response'

export default {
  async profile(params) {
    try {
      let res = await $request.get(`wp-json/rimplenet/v1/users`, { params })
    //   catchAxiosSuccess(res)
      return res.data
    } catch (error) {
      catchAxiosError(error)
      throw error
    }
  },

  async transactions(params) {
    try {
      let res = await $request.get(`wp-json/rimplenet/v1/transactions`, { params })
    //   catchAxiosSuccess(res)
      return res.data
    } catch (error) {
      catchAxiosError(error)
      throw error
    }
  },

  async balances(params) {
    try {
      let res = await $request.get(`wp-json/rimplenet/v1/user-wallet-balance`, { params })
    //   catchAxiosSuccess(res)
      return res.data
    } catch (error) {
      catchAxiosError(error)
      throw error
    }
  },

//   https://backend.middey.com/wp-json/rimplenet/v1/user-wallet-balance?user_id=47&wallet_id=ngn
}