interface SizeProps {
  id: string
  name: string
  items: {
    id: string
    quantity: number
    selectQuantity?: number | 0
    color: string
    price?: number
    discount?: number
  }[]
}

export default SizeProps
