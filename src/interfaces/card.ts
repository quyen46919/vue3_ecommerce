import CategoryProps from './category'
import SizeProps from './sizes'

interface CardProps {
  id: number
  name: string
  brand: string
  thumbnail: string
  imageList: string[]
  price: number
  inStock: boolean
  discount: number
  amount: number
  category: string
  SKU: string
  description: string
  sizes: SizeProps[]
  comments: {
    id: number
    parent_id: number
    comment: string
    rating: number
    updated_at: string
  }[]
  category_id?: CategoryProps
}

export default CardProps
