import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketsTicker from './components/MarketsTicker';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <MarketsTicker />
        <Features />
        <CTA />
      </main>
      <footer id="security" className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} NeonTrade. All rights reserved.</p>
          <div className="text-sm text-gray-500 flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;