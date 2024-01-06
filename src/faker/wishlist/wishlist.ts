import CardProps from '@/interfaces/card'
import thubmnail1 from '@/assets/images/products/product1.jpg'
import thubmnail2 from '@/assets/images/products/product2.jpg'
import thubmnail3 from '@/assets/images/products/product3.jpg'
import thubmnail4 from '@/assets/images/products/product4.jpg'
import thubmnail5 from '@/assets/images/products/product5.jpg'
import thubmnail6 from '@/assets/images/products/product6.jpg'
import thubmnail7 from '@/assets/images/products/product7.jpg'

const cards: Partial<CardProps>[] = [
  {
    id: 'abcd-1234-efgh-5678',
    name: 'ITALIAN L SHAPE SOFA ITALIAN L SHAPE SOFA',
    imageList: [thubmnail1, thubmnail2, thubmnail4, thubmnail5, thubmnail6, thubmnail7],
    price: 500,
    inStock: true,
  },
  {
    id: 'abcd-1225-efgh-5678',
    name: 'VIETNAM L SHAPE SOFA',
    imageList: [thubmnail7, thubmnail3, thubmnail4, thubmnail5, thubmnail6],
    price: 200,
    inStock: false,
  },
  {
    id: 'abcd-1234-5125-5678',
    name: 'AMERICA L SHAPE SOFA',
    category: 'Sofa',
    brand: 'Apex',
    imageList: [thubmnail5, thubmnail3, thubmnail4, thubmnail6, thubmnail7],
    price: 1000,
    inStock: true,
  }
]

export default cards
