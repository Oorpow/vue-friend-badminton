import opRequest from '@/request/index'
import type { IMatch } from './types'

const opReq = new opRequest({
  baseURL: import.meta.env.VITE_LOCAL_SERVER,
})

export const getMatchInfo = () =>
  opReq.post<IMatch>({
    url: 'https://extranet-lv.bwfbadminton.com/api/vue-cal-event-tournaments',
    method: 'post',
    data: {
      yearKey: '2023',
    },
    headers: {
      Authorization: `Bearer 2|NaXRu9JnMpSdb8l86BkJxj6gzKJofnhmExwr8EWkQtHoattDAGimsSYhpM22a61e1crjTjfIGTKfhzxA`,
    },
  })
