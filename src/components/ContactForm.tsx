import React, { useState } from 'react'

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
  botField: string
}

const initialFormValues: FormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
  botField: '',
}

export default function ContactForm() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues)
  const [formError, setFormError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  function updateField(field: keyof FormValues, value: string) {
    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }))

    if (formError) {
      setFormError('')
    }

    if (submitStatus !== 'idle') {
      setSubmitStatus('idle')
    }
  }

  function validateForm() {
    if (formValues.botField.trim()) {
      return 'Submission rejected.'
    }

    if (!formValues.name.trim()) {
      return 'Please enter your name.'
    }

    if (!formValues.subject.trim()) {
      return 'Please enter a subject.'
    }

    if (!formValues.message.trim()) {
      return 'Please enter your message.'
    }

    return ''
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const validationError = validateForm()

    if (validationError) {
      setSubmitStatus('error')
      setFormError(validationError)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setFormError('')

    try {
      const form = e.currentTarget
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(new FormData(form)).toString(),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setFormValues(initialFormValues)
      setSubmitStatus('success')
      setFormError('')
    } catch (error) {
      setSubmitStatus('error')
      setFormError('Sorry, your message could not be sent right now. Please try again or email me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      name="contact"
      method="POST"
      onSubmit={handleSubmit}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="bg-white/4 p-6 rounded-2xl"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          aria-label="name"
          type="text"
          name="name"
          value={formValues.name}
          onChange={(e) => updateField('name', e.target.value)}
          placeholder="Your name"
          required
          className="p-3 rounded-md bg-transparent border border-white/6 text-slate-100 placeholder:text-slate-400 outline-none focus:border-white/20"
        />
        <input
          aria-label="email"
          type="text"
          name="email"
          value={formValues.email}
          onChange={(e) => updateField('email', e.target.value)}
          placeholder="Your email"
          className="p-3 rounded-md bg-transparent border border-white/6 text-slate-100 placeholder:text-slate-400 outline-none focus:border-white/20"
        />
        <input
          aria-label="subject"
          type="text"
          name="subject"
          value={formValues.subject}
          onChange={(e) => updateField('subject', e.target.value)}
          placeholder="09... / +2519..."
          required
          className="p-3 rounded-md bg-transparent border border-white/6 text-slate-100 placeholder:text-slate-400 outline-none focus:border-white/20 md:col-span-2"
        />
        <textarea
          aria-label="message"
          name="message"
          value={formValues.message}
          onChange={(e) => updateField('message', e.target.value)}
          placeholder="Message"
          rows={6}
          required
          className="p-3 rounded-md bg-transparent border border-white/6 text-slate-100 placeholder:text-slate-400 outline-none focus:border-white/20 md:col-span-2"
        />
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <div className="hidden">
          <input
            type="text"
            name="bot-field"
            value={formValues.botField}
            onChange={(e) => updateField('botField', e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-brandBlue to-brandPurple text-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {submitStatus === 'success' && (
          <p className="text-sm text-emerald-400" aria-live="polite">
            Thanks for your message. I’ll get back to you soon.
          </p>
        )}

        {submitStatus === 'error' && (
          <p className="text-sm text-red-400" aria-live="polite">
            {formError}
          </p>
        )}
      </div>
    </form>
  )
}
