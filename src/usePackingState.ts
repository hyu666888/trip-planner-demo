import { useState, useEffect } from 'react'

const STORAGE_KEY = 'trip-planner-checked'

function loadState(): Record<string, Record<string, boolean>> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Record<string, Record<string, boolean>>) : {}
  } catch {
    return {}
  }
}

export function usePackingState(destinationId: string, items: string[]) {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    const all = loadState()
    return all[destinationId] ?? {}
  })

  useEffect(() => {
    const all = loadState()
    all[destinationId] = checked
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
  }, [checked, destinationId])

  const toggle = (item: string) => {
    setChecked(prev => ({ ...prev, [item]: !prev[item] }))
  }

  const checkedCount = items.filter(i => checked[i]).length

  return { checked, toggle, checkedCount }
}
