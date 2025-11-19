import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'

function CreateTenantForm() {
  const [form, setForm] = useState({
    schema_name: '',
    company_name: '',
    domain: '',
    description: '',
    address: '',
    phone: '',
    email: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    // Here you would normally call your backend endpoint
    await new Promise((res) => setTimeout(res, 1000))
    setSubmitting(false)
    setShowModal(true)
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_50%)]"></div>

      <div className="relative mx-auto max-w-4xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Create a Tenant</h1>
          <p className="mt-3 text-violet-100/80">Fill in the details below and we'll set things up. You'll receive an email with next steps.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-violet-100/80">Schema Name</label>
              <input name="schema_name" value={form.schema_name} onChange={handleChange} required className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 p-3 text-white placeholder:text-violet-200/40 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="storio_tenant_acme" />
            </div>
            <div>
              <label className="block text-sm text-violet-100/80">Company Name</label>
              <input name="company_name" value={form.company_name} onChange={handleChange} required className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 p-3 text-white placeholder:text-violet-200/40 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Acme Inc." />
            </div>
            <div>
              <label className="block text-sm text-violet-100/80">Domain</label>
              <input name="domain" value={form.domain} onChange={handleChange} required className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 p-3 text-white placeholder:text-violet-200/40 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="acme.com" />
            </div>
            <div>
              <label className="block text-sm text-violet-100/80">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 p-3 text-white placeholder:text-violet-200/40 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="admin@acme.com" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-violet-100/80">Description</label>
            <textarea name="description" rows="4" value={form.description} onChange={handleChange} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 p-3 text-white placeholder:text-violet-200/40 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Tell us a bit about your company and goals..." />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-violet-100/80">Address</label>
              <input name="address" value={form.address} onChange={handleChange} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 p-3 text-white placeholder:text-violet-200/40 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="123 Main St, City" />
            </div>
            <div>
              <label className="block text-sm text-violet-100/80">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 p-3 text-white placeholder:text-violet-200/40 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="+1 (555) 000-0000" />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3">
            <a href="/" className="rounded-xl border border-white/10 px-4 py-2 text-violet-100/80 transition hover:bg-white/10">Cancel</a>
            <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 font-medium text-white shadow-lg shadow-violet-500/30 transition hover:shadow-violet-500/50 disabled:opacity-60">
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4"
          >
            <motion.div
              initial={{ y: 40, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 text-center shadow-2xl"
            >
              <button onClick={() => setShowModal(false)} className="absolute right-3 top-3 rounded-lg p-1 text-violet-100/60 transition hover:bg-white/5 hover:text-white">
                <X className="h-5 w-5" />
              </button>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/30">
                <CheckCircle2 className="h-7 w-7 text-emerald-400" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Request received</h3>
              <p className="mt-2 text-sm text-violet-100/80">
                We will inform you soon when the page opens. Please check your email for a confirmation with instructions.
              </p>
              <div className="mt-6">
                <button onClick={() => setShowModal(false)} className="w-full rounded-xl bg-white/10 px-4 py-2 text-white ring-1 ring-white/20 transition hover:bg-white/15">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CreateTenantForm
