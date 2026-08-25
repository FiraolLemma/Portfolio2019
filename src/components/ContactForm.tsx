import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

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
  const { t } = useLanguage()
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
      return t('contact', 'required.name')
    }

    if (!formValues.subject.trim()) {
      return t('contact', 'required.subject')
    }

    if (!formValues.message.trim()) {
      return t('contact', 'required.message')
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
      setFormError(t('contact', 'error'))
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
      className="glass-panel rounded-3xl p-6 sm:p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          aria-label={t('contact', 'placeholders.name')}
          type="text"
          name="name"
          value={formValues.name}
          onChange={(e) => updateField('name', e.target.value)}
          placeholder={t('contact', 'placeholders.name')}
          required
          className="rounded-xl border border-white/10 bg-white/[0.035] p-3.5 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-cyan-300/50 focus:bg-white/[0.06]"
        />
        <input
          aria-label={t('contact', 'placeholders.email')}
          type="email"
          name="email"
          value={formValues.email}
          onChange={(e) => updateField('email', e.target.value)}
          placeholder={t('contact', 'placeholders.email')}
          className="rounded-xl border border-white/10 bg-white/[0.035] p-3.5 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-cyan-300/50 focus:bg-white/[0.06]"
        />
        <input
          aria-label={t('contact', 'placeholders.subject')}
          type="text"
          name="subject"
          value={formValues.subject}
          onChange={(e) => updateField('subject', e.target.value)}
          placeholder={t('contact', 'placeholders.subject')}
          required
          className="rounded-xl border border-white/10 bg-white/[0.035] p-3.5 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-cyan-300/50 focus:bg-white/[0.06] md:col-span-2"
        />
        <textarea
          aria-label={t('contact', 'placeholders.message')}
          name="message"
          value={formValues.message}
          onChange={(e) => updateField('message', e.target.value)}
          placeholder={t('contact', 'placeholders.message')}
          rows={6}
          required
          className="rounded-xl border border-white/10 bg-white/[0.035] p-3.5 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-cyan-300/50 focus:bg-white/[0.06] md:col-span-2"
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
            {isSubmitting ? t('contact', 'sending') : t('contact', 'send')}
          </button>
        </div>

        {submitStatus === 'success' && (
          <p className="text-sm text-emerald-400" aria-live="polite">
            {t('contact', 'success')}
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
