import $request from '@/axios/index'
import { catchAxiosError, catchAxiosSuccess } from './response'

  export const login = async(formData) => {
    try {
      let res = await $request.post(`wp-json/rimplenet/v1/users/login/`, formData)
      catchAxiosSuccess(res)
      return res.data
    } catch (error) {
      catchAxiosError(error)
      // return error
      throw error
    }
  }

  export const createAccount = async(formData) => {
    try {
      let res = await $request.post(`/auth/signup`, formData)
      catchAxiosSuccess(res)
      return res.data
    } catch (error) {
      catchAxiosError(error)
      // return error
      throw error
    }
  }
