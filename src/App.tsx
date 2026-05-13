import { destinations } from './data'
import { DestinationCard } from './DestinationCard'

export default function App() {
  return (
    <div className="min-h-screen bg-linen-100">
      <header className="sticky top-0 z-10 bg-linen-100/90 backdrop-blur border-b border-linen-200">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center gap-3">
          <span className="text-2xl" aria-hidden="true">🗺️</span>
          <div>
            <h1 className="text-lg font-bold text-stone-800 leading-tight">Trip Planner</h1>
            <p className="text-xs text-stone-400">Tap a destination to pack</p>
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6 space-y-3">
        {destinations.map(dest => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </main>

      <footer className="max-w-lg mx-auto px-4 py-8 text-center text-xs text-stone-400">
        Your packing progress is saved locally.
      </footer>
    </div>
  )
}
