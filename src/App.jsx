import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsStrip from "./components/StatsStrip";
import FeatureShowcase from "./components/FeatureShowcase";

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[#02060A]" />
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_10%,rgba(0,255,168,0.15),transparent),radial-gradient(800px_500px_at_90%_20%,rgba(139,92,246,0.18),transparent),radial-gradient(900px_600px_at_50%_100%,rgba(0,221,102,0.12),transparent)]" />
      <svg className="absolute inset-0 opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,255,168,0.15)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

function App() {
  return (
    <div className="relative min-h-screen text-emerald-100">
      <Background />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <StatsStrip />
        <FeatureShowcase />

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl text-center">
              <h2 className="text-2xl font-semibold text-white">
                Contests and Store
              </h2>
              <p className="mt-2 text-emerald-200/80">
                Coming soon... in v1 — get ready for electrifying rounds and slick gear.
              </p>
            </div>
          </div>
        </section>

        <footer className="pb-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-emerald-200/70">
            © {new Date().getFullYear()} my coding buddy · Neon green and black vibes
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
