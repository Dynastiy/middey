import CryptoJS from 'crypto-js'
const secretKey = import.meta.env.VITE_SECRET_KEY

export function currencyFormat(value) {
  if (!value) return ''
  value = Number(value).toLocaleString('en-US', {
    style: 'currency',
    currency: 'NGN'
  })
  return value
}

export function formatDate(value) {
  let currentDate = new Date(value)
  const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }
  return currentDate.toLocaleDateString('en-US', options)
}

export function getID(value) {
  const options = value.split('-').join('')
  const ID = options.slice(0, 6)
  return ID
}

export function generateRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export function retrieveToken() {
  // Get the encrypted token from localStorage
  const storedEncryptedToken = localStorage.getItem('_middey_user_token')
  if (!storedEncryptedToken) return
  // Decrypt the token
  const bytes = CryptoJS.AES.decrypt(storedEncryptedToken, secretKey)
  let decryptedToken = bytes.toString(CryptoJS.enc.Utf8)
  return decryptedToken
}

export function encryptToken(value) {
  // const secretKey = import.meta.env.secretKey;
  let encryptedToken = CryptoJS.AES.encrypt(value, secretKey).toString()
  return encryptedToken
}
