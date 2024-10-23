export type TProgress = {
  [key: number]: string
} | undefined
export const calcTotalTime = (progress: Record<number, string> | undefined) => {
  if (!progress) { return 1 }
  let res = 0
  const keys = Object.keys(progress || {})
  keys.forEach(item => {
    res += Number(item)
  })
  return res
}