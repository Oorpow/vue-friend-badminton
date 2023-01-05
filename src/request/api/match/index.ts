import opRequest from '@/request/config'
import type { IMatch } from './types'

export const getMatchInfo = () =>
  opRequest.post<IMatch>({
    url: 'https://extranet-lv.bwfbadminton.com/api/vue-cal-event-tournaments',
    data: {
      yearKey: '2023',
    },
    headers: {
      Authorization: `Bearer 2|NaXRu9JnMpSdb8l86BkJxj6gzKJofnhmExwr8EWkQtHoattDAGimsSYhpM22a61e1crjTjfIGTKfhzxA`,
    },
  })
