import opRequest from '@/request/config'
import type { ISpecialData } from '@/request/types'
import type { Invitation } from './types'

export const createInvitation = (invitationForm: Invitation) =>
  opRequest.post<ISpecialData>({
    url: '/invitation',
    data: invitationForm,
  })
