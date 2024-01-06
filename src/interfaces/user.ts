interface UserInfo {
  id: string
  userName: string
  avatar: string
  phoneNumber: string
  email: string
  shippingAddress: {
    country: string
    region: string
    city: string
    area: string
    adress: string
  }
}

export default UserInfo
