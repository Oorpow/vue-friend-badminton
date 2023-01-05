export interface IMatch {
  results: any
}

export interface IMatchInfo {
  cat_logo: string
  date: string
  end_date: string
  header_url: string
  location: string
  logo: string
  name: string
  progress: string
  start_date: string
  url: string
}

export interface IMatchItem {
  month: string
  matchList: IMatchInfo[]
}
