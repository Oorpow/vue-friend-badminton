export enum CheckTag {
  match = '赛事动态',
  equipment = '装备',
}

export const handleEnum = (tagList: any[]) => {
  const result = tagList.map((item) => {
    if (item === CheckTag.match) {
      item = 1
    } else if (item === CheckTag.equipment) {
      item = 2
    }
    return item
  })

  // 去重处理
  const resultSet = new Set(result)
  return [...resultSet]
}
