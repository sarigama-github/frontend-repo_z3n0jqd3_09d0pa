import React from 'react'
import { Brain, PenTool, Zap, LineChart, PlugZap } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Content Assistance',
    desc: 'Generate, suggest, and optimize content intelligently for your audience.'
  },
  {
    icon: PenTool,
    title: 'Real-Time Editing & Publishing',
    desc: 'Make updates instantly, no coding required.'
  },
  {
    icon: PlugZap,
    title: 'Seamless Integrations',
    desc: 'Works effortlessly with your existing tools and workflows.'
  },
  {
    icon: Zap,
    title: 'Performance-Optimized',
    desc: 'Fast, scalable, and built for the modern web.'
  },
  {
    icon: LineChart,
    title: 'Analytics & Insights',
    desc: 'Understand engagement and make data-driven decisions.'
  }
]

function Features() {
  return (
    <section id="features" className="relative z-10 bg-slate-950/80">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Built to make your brand story shine</h2>
          <p className="mt-4 text-violet-100/80">Every feature in Storio is designed to be effortless, beautiful, and smart.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 transition hover:shadow-2xl hover:shadow-violet-500/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-violet-300 ring-1 ring-white/10">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-violet-100/70">{f.desc}</p>
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-violet-500/10 blur-2xl transition group-hover:translate-y-[-10px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
