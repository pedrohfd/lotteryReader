import AsyncStorage from '@react-native-async-storage/async-storage'
import { configurePersist } from 'zustand-persist'

const { persist } = configurePersist({
  storage: AsyncStorage,
  rootKey: 'root',
})

export { persist }
