import { defineStore } from 'pinia'
import { getMatchInfo } from '@/request/api/match'
import type { IMatchItem, IMatchInfo } from '@/request/api/match/types'

export const useMatchStore = defineStore('matchStore', {
  state: () => ({
    matchList: <IMatchItem[]>[],
  }),
  actions: {
    // 获取今年的赛事信息
    async getMatchThisYear() {
      const res = await getMatchInfo()
      const result = <IMatchItem[]>[]

      Object.entries(res.results).forEach((item, i) => {
        result[i] = {
          month: '',
          matchList: [],
        }
        result[i].month = item[0]

        Object.values(item[1] as IMatchInfo[]).forEach((a) => {
          result[i].matchList.push(a as IMatchInfo)
        })
      })
      this.matchList.length = 0
      this.matchList.push(...result)
    },
  },
})
