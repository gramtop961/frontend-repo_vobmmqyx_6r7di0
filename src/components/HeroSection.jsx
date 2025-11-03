import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    <section className="relative pt-24">
      {/* Hero Canvas */}
      <div className="relative h-[82vh] w-full">
        {/* Spline 3D Cover */}
        <div className="absolute inset-0 z-10">
          <Spline
            scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Readability gradient + glow accents (doesn't block interaction) */}
        <div className="pointer-events-none absolute inset-0 z-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_15%,rgba(0,255,168,0.18),transparent),radial-gradient(900px_500px_at_90%_10%,rgba(139,92,246,0.14),transparent)]" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-30 h-full">
          <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white"
              >
                Master coding with an immersive, futuristic arena
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-4 text-lg text-emerald-200/85"
              >
                A blend of LeetCode precision, Codeforces grit, and GFG depth — wrapped in neon glass and kinetic motion.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <button className="rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 px-5 py-3 text-black font-semibold shadow-[0_10px_30px_-10px_rgba(0,255,136,0.8)]">
                  Start Solving
                </button>
                <button className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-3 text-emerald-300 hover:bg-emerald-500/20 transition-colors">
                  Explore Problems
                </button>
              </motion.div>

              {/* Glass stats snippet */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28 }}
                className="mt-8 grid w-full max-w-xl grid-cols-2 gap-3"
              >
                {[
                  { label: "Problems", value: "3,500+" },
                  { label: "Users Online", value: "8,214" },
                  { label: "Submissions Today", value: "98,432" },
                  { label: "Companies", value: "120+" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl text-emerald-200/80"
                  >
                    <div className="text-2xl font-extrabold text-white">{s.value}</div>
                    <div className="text-xs tracking-wide">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
