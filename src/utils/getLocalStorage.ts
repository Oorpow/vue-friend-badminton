import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

export const getLocalToken = () => {
  const store = useUserStore()
  const { token } = storeToRefs(store)
  return token.value
}
