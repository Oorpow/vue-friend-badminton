export type Equipment = {
  id: number
  img: string
  name: string
}

export type PlayerItem = {
  id: number
  name: string
  equipmentList: Equipment[]
}
