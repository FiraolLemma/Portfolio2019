import React, { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !email || !message) {
      alert('Please fill in name, email and message.')
      return
    }
    setSent(true)
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/4 p-6 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input aria-label="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="p-3 rounded-md bg-transparent border border-white/6" />
        <input aria-label="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className="p-3 rounded-md bg-transparent border border-white/6" />
        <input aria-label="subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" className="p-3 rounded-md bg-transparent border border-white/6 md:col-span-2" />
        <textarea aria-label="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" rows={6} className="p-3 rounded-md bg-transparent border border-white/6 md:col-span-2" />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button type="submit" className="px-4 py-2 rounded-full bg-gradient-to-r from-brandBlue to-brandPurple text-white">Send Message</button>
        {sent && <span className="text-green-400">Message sent (mock)</span>}
      </div>
    </form>
  )
}
