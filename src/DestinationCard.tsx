import { useState } from 'react'
import type { Destination } from './data'
import { usePackingState } from './usePackingState'

interface Props {
  destination: Destination
}

export function DestinationCard({ destination }: Props) {
  const { id, name, country, emoji, draw, packingItems } = destination
  const [open, setOpen] = useState(false)
  const { checked, toggle, checkedCount } = usePackingState(id, packingItems)

  return (
    <article
      className={`
        rounded-2xl border transition-all duration-200 overflow-hidden
        ${open
          ? 'border-[#5f8f8a] shadow-md shadow-[#5f8f8a]/10'
          : 'border-linen-300 shadow-sm hover:shadow-md hover:border-[#8fbfbb]'}
        bg-white/70 backdrop-blur-sm
      `}
    >
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full text-left p-5 flex items-start gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5f8f8a] rounded-2xl"
        aria-expanded={open}
      >
        <span className="text-4xl leading-none select-none" aria-hidden="true">
          {emoji}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <h2 className="text-xl font-semibold text-stone-800 leading-tight">{name}</h2>
            <span className="text-sm font-medium text-[#5f8f8a]">{country}</span>
          </div>
          <p className="mt-1 text-sm text-stone-500 leading-snug">{draw}</p>
          {checkedCount > 0 && (
            <p className="mt-2 text-xs text-[#5f8f8a] font-medium">
              {checkedCount}/{packingItems.length} packed
            </p>
          )}
        </div>
        <span
          className={`ml-1 mt-1 text-[#5f8f8a] transition-transform duration-200 flex-shrink-0 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4.5 6.75 9 11.25l4.5-4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5 pt-0">
          <div className="border-t border-linen-200 pt-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">
              Packing list
            </h3>
            <ul className="space-y-3">
              {packingItems.map(item => {
                const isChecked = !!checked[item]
                return (
                  <li key={item}>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <span className="relative flex-shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggle(item)}
                          className="peer sr-only"
                        />
                        <span
                          className={`
                            flex h-5 w-5 items-center justify-center rounded-md border-2 transition-colors duration-150
                            ${isChecked
                              ? 'border-[#5f8f8a] bg-[#5f8f8a]'
                              : 'border-linen-300 bg-white group-hover:border-[#8fbfbb]'}
                          `}
                        >
                          {isChecked && (
                            <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
                              <path d="M1 4.5 4 7.5l6-6" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                      </span>
                      <span className={`text-sm leading-snug transition-colors ${isChecked ? 'line-through text-stone-400' : 'text-stone-700'}`}>
                        {item}
                      </span>
                    </label>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </article>
  )
}
