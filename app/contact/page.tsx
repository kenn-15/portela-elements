'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErrorMsg(null)

    // basic client validation
    if (!name.trim()) return setErrorMsg('Please enter your name.')
    if (!email.trim() || !isValidEmail(email))
      return setErrorMsg('Please enter a valid email.')
    if (!message.trim() || message.trim().length < 5)
      return setErrorMsg('Please enter a longer message.')

    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim()
        })
      })

      const json = await res.json()

      if (!res.ok || !json?.ok) {
        setStatus('error')
        setErrorMsg(json?.error || 'An unexpected error occurred.')
        return
      }

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err: unknown) {
      setStatus('error')
      const msg = err instanceof Error ? err.message : String(err)
      setErrorMsg(msg || 'Network error')
    }
  }

  return (
    <main>
      <Navbar />

      <section>
        <SectionHeader label="Get in Touch" />
      </section>

      <section>
        <p className="text-neutral-700">
          Intro placeholder explaining how visitors can reach out and what the response
          time looks like.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Contact Form</h2>

        <form
          onSubmit={handleSubmit}
          aria-describedby="contact-status"
          className="mt-4 space-y-4 max-w-xl"
        >
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border px-3 py-2"
              required
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border px-3 py-2"
              required
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full rounded-md border px-3 py-2 min-h-[120px]"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center rounded-md bg-primary-500 px-4 py-2 text-white disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </div>

          <div id="contact-status" role="status" aria-live="polite">
            {status === 'success' && (
              <p className="text-green-600">Thanks! Your message was sent.</p>
            )}
            {status === 'error' && (
              <p className="text-red-600">{errorMsg || 'Something went wrong.'}</p>
            )}
            {status === 'idle' && errorMsg && <p className="text-red-600">{errorMsg}</p>}
          </div>
        </form>
      </section>

      <section className="mt-8">
        <p className="text-sm">
          Response time placeholder (e.g., I typically reply within 24–48 hours.)
        </p>
      </section>

      <section className="mt-6">
        <p>If you prefer, you can book a free 30-minute consultation instead.</p>
      </section>

      <Footer />
    </main>
  )
}
