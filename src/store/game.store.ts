import create from 'zustand'
import { persist } from './index'

const useGameStore = create(
  persist(
    {
      key: 'auth',
      allowlist: ['game'],
    },
    (set, get) => ({
      game: '',
    })
  )
)
