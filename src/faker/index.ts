import newArrivalCards from './home/new_arrival'
import recommendedCards from './home/recommended_for_you'
import relativeCards from './productDetail/related_products'

const allProducts = [...newArrivalCards, ...recommendedCards, ...relativeCards]
export default allProducts
