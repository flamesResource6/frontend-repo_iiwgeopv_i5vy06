import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden flex items-center" id="home">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-xs text-gray-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Live crypto markets
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600">
              Trade the future in vibrant 3D
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700/90">
              Experience a modern, high‑performance crypto trading platform. Real‑time prices, sleek tools, and a mesmerizing 3D hero featuring reflective neon cubes.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#markets" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-gray-800 transition-colors">
                Launch App
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
                Explore features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
