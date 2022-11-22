import { getAllPlayer, getOnePlayer } from '@/request/api/player'
import type { IPlayerInfo, PlayerItem } from '@/request/api/player/types'
import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('playerStore', {
  state: () => {
    return {
      playerList: <PlayerItem[]>[],
      currentPlayer: <IPlayerInfo>{},
    }
  },
  actions: {
    async getPlayerList() {
      const res = await getAllPlayer()
      this.playerList.length = 0
      this.playerList.push(...res.data)
    },
    async getTargetPlayer(id: number) {
      const res = await getOnePlayer(id)
      this.currentPlayer = res.data
    },
  },
  getters: {
    getCurrentPlayer: (state) => state.currentPlayer,
  },
})
