import { Shield, Zap, LineChart, Layers } from 'lucide-react';

const items = [
  { icon: Zap, title: 'Lightning-fast', desc: 'Blazing execution with millisecond latency and an ultra‑smooth UI.' },
  { icon: LineChart, title: 'Real-time data', desc: 'Streaming order books, advanced charting, and depth heatmaps.' },
  { icon: Layers, title: 'Multi‑asset', desc: 'Spot, perpetuals, and options. One unified, intuitive interface.' },
  { icon: Shield, title: 'Bank‑grade security', desc: 'Institutional custody, SOC2, and continuous monitoring.' },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Built for peak performance</h2>
          <p className="mt-3 text-gray-600">Everything you need to trade with confidence, wrapped in a modern, vibrant experience.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-500 text-white flex items-center justify-center shadow">
                <it.icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
