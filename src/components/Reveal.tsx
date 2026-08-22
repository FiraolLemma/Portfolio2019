import React, { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function Reveal({ children, className = '', id }: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShow(true)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={(r) => (ref.current = r)}
      className={`${className} reveal ${show ? 'show' : ''}`}
      style={{ scrollMarginTop: '88px' }}
    >
      {children}
    </section>
  )
}
