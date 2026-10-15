const sections = [
  {
    title: 'Trending Cards',
    description: 'Market trend data will appear here in a future phase.',
  },
  {
    title: 'Breakout Predictions',
    description: 'Model predictions will appear here in a future phase.',
  },
  {
    title: 'Market Overview',
    description: 'Market-level insights will appear here in a future phase.',
  },
]

export function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <section className="max-w-3xl" aria-labelledby="page-title">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Pokémon card market intelligence
        </p>
        <h1
          id="page-title"
          className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
        >
          PokéMarket Predictor
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Machine learning-powered Pokémon card market intelligence.
        </p>
      </section>

      <section
        className="mt-16 grid gap-5 md:grid-cols-3"
        aria-label="Market intelligence sections"
      >
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-black/10"
          >
            <div className="mb-6 h-1.5 w-12 rounded-full bg-emerald-400" />
            <h2 className="text-lg font-semibold text-slate-100">
              {section.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {section.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  )
}
