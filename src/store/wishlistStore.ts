import CardProps from '@/interfaces/card'
import { defineStore } from 'pinia'

export interface WishListState {
  wishlist: Partial<CardProps>[]
}

export const useWishList = defineStore('wishlist', {
  state: () => ({ wishlist: [] } as WishListState),
  getters: {
    getLength: (state) => state.wishlist.length,
    isAlreadyInWishlist: (state) => (id?: number) => state.wishlist.find((item) => item.id === id),
    getWishlist: (state) => state.wishlist
  },
  actions: {
    addToWishlist(item: Partial<CardProps>) {
      if (!!item.id && this.isAlreadyInWishlist(item.id)) return
      this.wishlist.push(item)
    },
    removeFromWishlist(id?: number) {
      if (!id) return
      this.wishlist = this.wishlist.filter((item) => item.id !== id)
    }
  },
  persist: true
})
