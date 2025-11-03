export default function StatsStrip() {
  const stats = [
    { label: "Problems", value: "3,500+" },
    { label: "Companies", value: "120+" },
    { label: "Submissions Today", value: "98,432" },
    { label: "Users Online", value: "8,214" },
  ];

  return (
    <section className="mt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl shadow-[0_0_40px_-20px_rgba(0,255,136,0.7)]"
            >
              <div className="text-2xl font-extrabold tracking-tight text-white">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-emerald-200/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
