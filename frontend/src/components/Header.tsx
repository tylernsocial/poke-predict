import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <NavLink
          to="/"
          className="flex items-center gap-3 text-base font-semibold tracking-tight text-white"
        >
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-xl bg-emerald-400 text-sm font-black text-slate-950 shadow-lg shadow-emerald-950/30"
          >
            PM
          </span>
          PokéMarket Predictor
        </NavLink>
        <nav aria-label="Primary navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-sm transition-colors ${
                isActive
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`
            }
          >
            Overview
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
