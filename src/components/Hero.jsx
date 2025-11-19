import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.25),transparent_50%)]"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-28 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-violet-200 ring-1 ring-white/20 backdrop-blur">
            <span>🚀 Introducing</span>
            <span className="font-semibold text-white">Storio</span>
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            The AI-Powered Website Content Management System
          </h1>
          <p className="mt-6 text-lg leading-7 text-violet-100/90">
            Managing a website should be simple, smart, and seamless. Storio is an AI-driven CMS designed to redefine how you manage your website.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/create-tenant"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-white shadow-lg shadow-violet-500/30 transition hover:shadow-violet-500/50"
            >
              Create Tenants
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
