import React from 'react'

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-violet-100/70">© {new Date().getFullYear()} Brainicon Technology — Storio</p>
          <div className="text-sm text-violet-100/70">Because managing your website shouldn’t just be easier—it should be smarter.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
