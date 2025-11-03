import { Rocket, Home, Trophy, MessageSquare } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl shadow-[0_0_40px_-10px_rgba(0,255,136,0.6)]">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-[0_0_25px_5px_rgba(0,255,136,0.4)]">
              <Rocket className="h-5 w-5 text-black" />
            </div>
            <span className="font-semibold tracking-tight text-emerald-300">
              my coding buddy
            </span>
          </div>
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li className="text-emerald-300/80 hover:text-emerald-300 transition-colors cursor-pointer flex items-center gap-2"><Home className="h-4 w-4"/> Home</li>
            <li className="text-emerald-300/80 hover:text-emerald-300 transition-colors cursor-pointer flex items-center gap-2"><Trophy className="h-4 w-4"/> Problems</li>
            <li className="text-emerald-300/80 hover:text-emerald-300 transition-colors cursor-pointer flex items-center gap-2"><MessageSquare className="h-4 w-4"/> Discussions</li>
            <li className="text-emerald-300/80 hover:text-emerald-300 transition-colors cursor-pointer">Support</li>
          </ul>
          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-emerald-300 shadow-[0_0_20px_rgba(0,255,136,0.3)_inset] hover:bg-emerald-500/20 transition-colors">
              Sign in
            </button>
            <button className="rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 px-3 py-1.5 text-black font-semibold shadow-[0_10px_30px_-10px_rgba(0,255,136,0.8)]">
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
