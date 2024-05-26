import { BasePaginationParams } from '@/interfaces/api';
import axiosClient from './axios.interceptor';

interface GetCategoryParams extends BasePaginationParams {
    name?: string
}

const ProductAPI = {
    getCategory : (params: GetCategoryParams) => {
        const url = '/category/';
        return axiosClient.get(url, { params });
    },
    getRecommendProduct: (params: BasePaginationParams) => {
        const url = '/product/';
        return axiosClient.get(url, { params });
    },
    getProductDetail: (productId: number) => {
        const url = `/product/${productId}/`
        return axiosClient.get(url)
    }
};

export default ProductAPI;