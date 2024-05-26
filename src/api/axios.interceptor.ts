import axios from 'axios'

const axiosClient = axios.create({
  // import đường dẫn url từ .env
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  // định dạng truyền dữ liệu mặc định là JSON
  headers: {
    'content-type': 'application/json'
  }
})
axiosClient.interceptors.request.use(async (config) => {
  // Xử lý các thông số trước khi gửi request đi
  // Gắn Token vào Header nếu tồn tại key token trong localStorage
  const authTokens = JSON.parse(localStorage.getItem('token') as string) || ''
  if (authTokens) {
    config.headers.Authorization = `Bearer ${authTokens}`
  }

  return config
})

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data
    }
    return response?.data
  },
  (error) => {
    throw error
  }
)

export default axiosClient
