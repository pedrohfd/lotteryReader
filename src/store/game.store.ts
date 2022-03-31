import create from 'zustand'
import { getGames } from '../services/request/getGames'
import { GameStoreProps } from './game.props'
import { persist } from './index'

const useGameStore = create<GameStoreProps>(
  persist(
    {
      key: 'games',
      allowlist: ['games'],
    },
    (set, get) => ({
      games: [],

      getGames: async () => {
        const response = await getGames()

        set({ games: response })
      },
    })
  )
)

export default useGameStore
