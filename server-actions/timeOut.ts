'use server'
export default function timeOut() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('timeOut')
    }, 1000)
  })
}
