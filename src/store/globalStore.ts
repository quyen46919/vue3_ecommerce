import { defineStore } from 'pinia'

export interface GlobalProps {
  showMobileSidebarMenu: boolean
}

export const useGlobal = defineStore('global', {
  state: () => ({ showMobileSidebarMenu: false } as GlobalProps),
  getters: {
    isShowMobileSidebarMenu: (state) => state.showMobileSidebarMenu
  },
  actions: {
    toggleMobileSidebarMenu() {
      this.showMobileSidebarMenu = !this.showMobileSidebarMenu
    }
  },
  persist: true
})
