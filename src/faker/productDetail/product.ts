import thubmnail1 from '@/assets/images/products/product1.jpg'
import thubmnail2 from '@/assets/images/products/product2.jpg'
import thubmnail3 from '@/assets/images/products/product3.jpg'
import thubmnail4 from '@/assets/images/products/product4.jpg'
import thubmnail5 from '@/assets/images/products/product5.jpg'
import thubmnail6 from '@/assets/images/products/product6.jpg'
import thubmnail7 from '@/assets/images/products/product7.jpg'

const product = {
  id: 'abcd-1234-1111-55151',
  name: 'JAPAN L SHAPE SOFA',
  category: 'Sofa',
  brand: 'Thang Loi Company',
  imageList: [thubmnail1, thubmnail2, thubmnail4, thubmnail3, thubmnail5, thubmnail6, thubmnail7],
  price: 424,
  inStock: true,
  discount: 14,
  rating: 2.5,
  reviewCount: 41,
  SKU: '123BE45VGRT',
  description:
    '123123213 Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi labore blanditiis',
  sizes: [
    {
      id: '1234-5678-efgh-abcd',
      name: 'XS',
      items: [
        {
          id: '1234-5678-efgh-abcd',
          color: '#fc3d57',
          quantity: 7
        },
        {
          id: '1234-5678-efgh-sds1',
          color: '#ffffff',
          quantity: 15
        },
        {
          id: '1234-5678-efgh-s15s',
          color: '#000000',
          quantity: 24
        }
      ]
    },
    {
      id: '5125-232d-ffda-abcd',
      name: 'S',
      items: [
        {
          id: 'seas-5678-efgh-abcd',
          color: '#d1aa1a',
          quantity: 3
        },
        {
          id: '1234-1244-efgh-abcd',
          color: '#ddd1d1',
          quantity: 7
        },
        {
          id: '1234-1244-5125-sss1',
          color: '#887812',
          quantity: 25
        }
      ]
    },
    {
      id: '5125-232d-efgh-abcd',
      name: 'M',
      items: [
        {
          id: 'ss11-2123-efgh-abcd',
          color: '#991212',
          quantity: 12
        },
        {
          id: '1234-4444-efgh-abcd',
          color: '#991255',
          quantity: 13
        }
      ]
    },
    {
      id: '5125-232d-sda1-abcd',
      name: 'L',
      items: [
        {
          id: '12323-5678-efgh-abcd',
          color: '#fc3d57',
          quantity: 4
        },
        {
          id: '12323-sdsd-2323-abcd',
          color: '#224122',
          quantity: 6
        }
      ]
    },
    {
      id: '5125-232d-efgh-5125',
      name: 'XL',
      items: [
        {
          id: 'ssdd-5678-efgh-1231',
          color: '#fc3d57',
          quantity: 9
        },
        {
          id: 'sds1-22s1-efgh-sssa',
          color: '#ff1a2a',
          quantity: 8
        }
      ]
    },
    {
      id: '5125-232d-efgh-sad1',
      name: 'XXL',
      items: [
        {
          id: '5311-5678-efgh-abcd',
          color: '#fff312',
          quantity: 5
        },
        {
          id: '7272-5678-efgh-abcd',
          color: '#221d1f',
          quantity: 5
        }
      ]
    }
  ],
  productDetail:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi labore blanditiis'
}

export default product
