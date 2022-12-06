// 未登录情况下不允许访问如下路由
const ignoreList = [
  '/message',
  '/produce',
  '/account',
  '/account/home',
  '/account/request',
]

export const routeInIgnore = (path: string) => {
  return ignoreList.some((item) => item === path)
}
