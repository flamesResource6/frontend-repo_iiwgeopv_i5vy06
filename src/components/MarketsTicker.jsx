import { useEffect, useState } from 'react';

const pairs = [
  { symbol: 'BTC/USDT', color: 'text-orange-600' },
  { symbol: 'ETH/USDT', color: 'text-indigo-600' },
  { symbol: 'SOL/USDT', color: 'text-cyan-600' },
  { symbol: 'XRP/USDT', color: 'text-emerald-600' },
  { symbol: 'ADA/USDT', color: 'text-fuchsia-600' },
];

export default function MarketsTicker() {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    // simple fake price flucutation
    const base = { BTC: 68950, ETH: 3560, SOL: 152.2, XRP: 0.61, ADA: 0.54 };
    setPrices(base);
    const id = setInterval(() => {
      setPrices(p => Object.fromEntries(Object.entries(p).map(([k,v]) => [k, +(v * (0.999 + Math.random()*0.002)).toFixed(k.length>3?2:4)])));
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="markets" className="py-10 sm:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow">
          <div className="flex items-center gap-6 whitespace-nowrap animate-[ticker_40s_linear_infinite] will-change-transform" style={{
            maskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)'
          }}>
            {[...Array(2)].flatMap(() => pairs).map((p, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-4">
                <span className={`text-xs font-medium px-2 py-1 rounded-full bg-gray-100 ${p.color}`}>{p.symbol}</span>
                <span className="font-semibold tabular-nums text-gray-900">{prices[p.symbol.split('/')[0]] ?? '—'}</span>
                <span className="text-xs text-gray-500">USD</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </section>
  );
}
