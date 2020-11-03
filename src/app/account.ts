export interface Account {
  id: number,
  type: string,
  num: number,
  balance: number,
  change: {
    percent: number,
    numeric: number,
  }
}