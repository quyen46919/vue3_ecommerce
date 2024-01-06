import SizeProps from './sizes'

interface CardProps {
  id: string
  name: string
  brand: string
  imageList: string[]
  price: number
  inStock: boolean
  discount: number
  rating: number
  reviewCount: number
  category: string
  SKU: string
  description: string
  sizes: SizeProps[]
  productDetail: string
}

export default CardProps
