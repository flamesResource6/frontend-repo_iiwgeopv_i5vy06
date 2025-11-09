import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-500 text-white shadow">
              <Rocket size={18} />
            </span>
            <span className="text-xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              NeonTrade
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700/80">
            <a href="#markets" className="hover:text-gray-900 transition-colors">Markets</a>
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#security" className="hover:text-gray-900 transition-colors">Security</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-gray-200/70 bg-white text-gray-700 hover:bg-gray-50 transition-colors">
              Sign in
            </button>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-600 text-white shadow hover:shadow-md transition-all">
              Get started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
