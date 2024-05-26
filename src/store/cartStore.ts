import CartItemProps from '@/interfaces/cartItem';
import { defineStore } from 'pinia';

export interface CartState {
    cart: CartItemProps[];
}

export const useCart = defineStore('cart', {
    state: () => ({ cart: [] } as CartState),
    getters: {
        getCart: (state) => state.cart,
        getLength: (state) => state.cart.length,
        isAlreadyInCart: (state) => (id?: number) => {
            if (!id) return;
            return state.cart.find((item) => item.id === id);
        },
    },
    actions: {
        addToCart(item: CartItemProps) {
            if (!!item.id && this.isAlreadyInCart(item.id)) return;
            this.cart.push({
                id: item.id,
                name: item.name,
                thumbnail: item.thumbnail,
                imageList: item.imageList,
                price: item.price,
                discount: item.discount,
                // targetSize: item.targetSize || '',
                // targetColor: item.targetColor || '',
                targetQuantity: item.targetQuantity || 1,
                amount: item.amount,
            });
        },
        removeFromCart(id?: number) {
            if (!id) return;
            this.cart = this.cart.filter((item) => item.id !== id);
        },
        increaseQuantity(id: number) {
            const item = this.cart.find((item) => item.id === id);
            if (item) item.targetQuantity++;
        },
        decreaseQuantity(id: number) {
            const item = this.cart.find((item) => item.id === id);
            if (item) item.targetQuantity--;
        },
        clearCart() {
            this.cart = []
        } 
    },
    persist: true,
});
