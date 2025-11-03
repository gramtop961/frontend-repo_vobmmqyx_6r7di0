import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-12 shadow-[0_0_80px_-20px_rgba(0,255,136,0.8)]">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-cyan-400/5 to-transparent" />
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white"
              >
                Your all-in-one arena for coding mastery
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-4 text-emerald-200/80 text-lg"
              >
                Mix of LeetCode precision, Codeforces grit, and GFG depth — with a neon cyber aesthetic.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
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
            </div>
            <div className="relative z-10">
              <div className="relative h-80 sm:h-96 lg:h-full w-full rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 to-teal-500/10 p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,168,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(0,255,136,0.12),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(139,92,246,0.12),transparent_35%)]" />
                <div className="relative grid h-full grid-rows-6 gap-2">
                  <div className="row-span-2 rounded-xl bg-black/60 backdrop-blur border border-white/10 p-4 text-emerald-300">
                    <div className="text-xs uppercase tracking-wider text-emerald-400/80">Live Contest</div>
                    <div className="mt-1 font-semibold">Monthly Challenge • Round #27</div>
                    <div className="mt-2 text-emerald-200/70">Starts in 03:42:16</div>
                  </div>
                  <div className="row-span-4 grid grid-cols-2 gap-2">
                    <div className="rounded-xl bg-black/60 backdrop-blur border border-white/10 p-4">
                      <div className="text-sm text-emerald-200/80">Today Solved</div>
                      <div className="mt-1 text-4xl font-bold text-white">18</div>
                      <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                        <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 shadow-[0_0_15px_rgba(0,255,136,0.7)]" />
                      </div>
                    </div>
                    <div className="rounded-xl bg-black/60 backdrop-blur border border-white/10 p-4">
                      <div className="text-sm text-emerald-200/80">Global Users</div>
                      <div className="mt-1 text-4xl font-bold text-white">42,188</div>
                      <div className="mt-2 text-emerald-200/70">+1,204 today</div>
                    </div>
                    <div className="col-span-2 rounded-xl bg-black/60 backdrop-blur border border-white/10 p-4">
                      <div className="text-sm text-emerald-200/80">Trending Tags</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {[
                          "dp",
                          "graphs",
                          "binary-search",
                          "two-pointers",
                          "greedy",
                          "math",
                        ].map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
