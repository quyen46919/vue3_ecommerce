import UserInfo from '@/interfaces/user'
import { defineStore } from 'pinia'

export interface AuthInfo {
  user?: UserInfo
  token?: string
}

export const useAuth = defineStore('auth', {
  state: () => ({ user: undefined } as AuthInfo),
  getters: {
    getUser: (state) => state.user,
    isAuthenticated: (state) => !!state.user?.id
  },
  actions: {
    login(user: UserInfo) {
      this.user = user
    },
    logout() {
      this.user = undefined
    }
  },
  persist: true
})
