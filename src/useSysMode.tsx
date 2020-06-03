import { useReducer, useEffect } from "react"

type SysMode = {
  dark: boolean
}

export const useSysMode = (): SysMode => {
  const [dark, updateDark] = useReducer(
    () =>
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches,
    false
  )
  useEffect(() => {
    updateDark()
    window.matchMedia("(prefers-color-scheme: dark)").addListener(updateDark)
  }, [])
  return { dark }
}
