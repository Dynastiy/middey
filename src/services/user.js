import $request from '@/axios/index'
// import { catchAxiosError, catchAxiosSuccess } from './response'
import { catchAxiosError } from './response'

  export const profile = async (params) => {
    try {
      let res = await $request.get(`wp-json/rimplenet/v1/users`, { params })
    //   catchAxiosSuccess(res)
      return res.data
    } catch (error) {
      catchAxiosError(error)
      throw error
    }
  }

  export const transactions = async (params) => {
    try {
      let res = await $request.get(`wp-json/rimplenet/v1/transactions`, { params })
    //   catchAxiosSuccess(res)
      return res.data
    } catch (error) {
      catchAxiosError(error)
      throw error
    }
  }

  export const balances = async (params) => {
    try {
      let res = await $request.get(`wp-json/rimplenet/v1/user-wallet-balance`, { params })
    //   catchAxiosSuccess(res)
      return res.data
    } catch (error) {
      catchAxiosError(error)
      throw error
    }
  }