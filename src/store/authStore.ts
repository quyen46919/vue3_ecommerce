import UserInfo from '@/interfaces/user'
import { defineStore } from 'pinia'
import { isEmpty } from 'lodash'

interface User {
  id: number
  username: string
  avatar?: string
}
export interface AuthInfo {
  user: User | null
  token?: string
}

export const useAuth = defineStore('auth', {
  state: () => ({} as AuthInfo),
  getters: {
    getUser: (state) => state.user,
    isAuthenticated: (state) => isEmpty(state.user)
  },
  actions: {
    login(user: User) {
      this.user = user
    },
    logout() {
      this.user = null
    }
  },
  persist: true
})
