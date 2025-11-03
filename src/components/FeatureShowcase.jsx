import { Filter, Calendar, User, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "LeetCode-style Problemset",
    desc: "Filter by difficulty, tags, and companies with a glassy, neon UI.",
    icon: Filter,
  },
  {
    title: "Monthly Progress Calendar",
    desc: "Track streaks and see daily solves at a glance.",
    icon: Calendar,
  },
  {
    title: "Profiles like /u/<username>",
    desc: "Personal dashboards with stats, badges, and timelines.",
    icon: User,
  },
  {
    title: "Secure & Performant",
    desc: "Battle-tested infra ready for editor, judge and submissions.",
    icon: ShieldCheck,
  },
];

export default function FeatureShowcase() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-transform hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-emerald-400/20 to-teal-500/20 blur-2xl" />
              <div className="relative z-10">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-black shadow-[0_0_25px_5px_rgba(0,255,136,0.35)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="mt-1 text-emerald-200/80 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
