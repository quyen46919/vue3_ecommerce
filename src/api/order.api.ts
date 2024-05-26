import { BasePaginationParams } from '@/interfaces/api'
import axiosClient from './axios.interceptor'

interface CreateOrderParams {
  receiver_name: string
  receiver_phone: string
  receiver_address: string
  description: string
  user_id: number
}
interface CreateOrderDetailParams {
  order_id: number
  product_id: number
  amount: number
  price: number
  discount: number
}
interface VerifyPayment {
  payment_id: string
  order_id: number
}

const OrderAPI = {
  createOrder: (body: CreateOrderParams) => {
    const url = '/orders/'
    return axiosClient.post(url, body)
  },
  createOrderDetail: (orderId: number, body: CreateOrderDetailParams) => {
    const url = `/orders/${orderId}/detail/`
    return axiosClient.post(url, body)
  },
  createPaymentOrder: (orderId: number) => {
    const url = `/orders/${orderId}/payment/`
    return axiosClient.get(url)
  },
  verifyPayment: (orderId: number, body: VerifyPayment) => {
    const url = `orders/${orderId}/payment/verify/`
    return axiosClient.post(url, body)
  }
}

export default OrderAPI
