export default function CTA(){
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700">
          Zero maker fees • Deep liquidity • 24/7 support
        </div>
        <h3 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Start trading in minutes</h3>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Create an account, fund with your preferred currency, and access hundreds of markets with institutional‑grade tools.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-600 text-white px-6 py-3 font-semibold shadow hover:shadow-md transition-all">Create account</a>
          <a href="#security" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 hover:bg-gray-50 transition-all">Learn more</a>
        </div>
        <p className="mt-4 text-xs text-gray-500">By creating an account, you agree to our Terms and Privacy Policy.</p>
      </div>
    </section>
  );
}
