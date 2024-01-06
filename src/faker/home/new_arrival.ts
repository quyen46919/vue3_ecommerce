import CardProps from '@/interfaces/card'
import thubmnail1 from '@/assets/images/products/product1.jpg'
import thubmnail2 from '@/assets/images/products/product2.jpg'
import thubmnail3 from '@/assets/images/products/product3.jpg'
import thubmnail4 from '@/assets/images/products/product4.jpg'
import thubmnail5 from '@/assets/images/products/product5.jpg'
import thubmnail6 from '@/assets/images/products/product6.jpg'
import thubmnail7 from '@/assets/images/products/product7.jpg'

const cards: CardProps[] = [
  {
    id: 'abcd-1234-efgh-5678',
    name: 'ITALIAN L SHAPE SOFA ITALIAN L SHAPE SOFA',
    category: 'Sofa',
    brand: 'Apex',
    imageList: [thubmnail1, thubmnail2, thubmnail4, thubmnail5, thubmnail6, thubmnail7],
    price: 500,
    inStock: true,
    discount: 2,
    rating: 4.5,
    reviewCount: 10,
    SKU: 'BE45VGRT',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi labore blanditiis',
    sizes: [
      {
        id: '1234-5678-efgh-abcd',
        name: 'XS',
        items: [
          {
            id: '1234-5678-efgh-abcd',
            color: '#fc3d57',
            quantity: 5
          }
        ]
      }
    ],
    productDetail:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi labore blanditiis'
  },
  {
    id: 'abcd-1225-efgh-5678',
    name: 'VIETNAM L SHAPE SOFA',
    category: 'Sofa',
    brand: 'Apex',
    imageList: [thubmnail7, thubmnail3, thubmnail4, thubmnail5, thubmnail6],
    price: 200,
    inStock: true,
    discount: 1,
    rating: 4.5,
    reviewCount: 102,
    SKU: 'BE45VGRT',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi labore blanditiis',
    sizes: [
      {
        id: '1234-5678-efgh-abcd',
        name: 'XS',
        items: [
          {
            id: '1234-5678-efgh-abcd',
            color: '#fc3d57',
            quantity: 5
          }
        ]
      }
    ],
    productDetail:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi labore blanditiis'
  },
  {
    id: 'abcd-1234-5125-5678',
    name: 'AMERICA L SHAPE SOFA',
    category: 'Sofa',
    brand: 'Apex',
    imageList: [thubmnail5, thubmnail3, thubmnail4, thubmnail6, thubmnail7],
    price: 1000,
    inStock: true,
    discount: 10,
    rating: 4.5,
    reviewCount: 88,
    SKU: 'BE45VGRT',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi labore blanditiis',
    sizes: [
      {
        id: '1234-5678-efgh-abcd',
        name: 'XS',
        items: [
          {
            id: '1234-5678-efgh-abcd',
            color: '#fc3d57',
            quantity: 5
          }
        ]
      }
    ],
    productDetail:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi labore blanditiis'
  },
  {
    id: 'abcd-1234-1111-5678',
    name: 'JAPAN L SHAPE SOFA',
    category: 'Sofa',
    brand: 'Apex',
    imageList: [thubmnail3, thubmnail4, thubmnail5, thubmnail6, thubmnail7],
    price: 350,
    inStock: true,
    discount: 4,
    rating: 1,
    reviewCount: 0,
    SKU: 'BE45VGRT',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi labore blanditiis',
    sizes: [
      {
        id: '1234-5678-efgh-abcd',
        name: 'XS',
        items: [
          {
            id: '1234-5678-efgh-abcd',
            color: '#fc3d57',
            quantity: 5
          }
        ]
      }
    ],
    productDetail:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi labore blanditiis'
  }
]

export default cards
