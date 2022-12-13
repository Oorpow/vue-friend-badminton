export type Equipment = {
  id: number
  img: string
  name: string
}

export type PlayerItem = {
  id: number
  name: string
  smallImg: string
  description: string
  bannerImg: string
  cnName: string
  equipmentList: Equipment[]
  avatar: string
}

export interface IHonorItem {
  id: number
  name: string
  year: string
}

export interface IPlayerInfo {
  id: number
  name: string
  description: string
  equipmentList: Equipment[]
  honorList: IHonorItem[]
  bannerImg: string
}
