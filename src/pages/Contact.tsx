import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const INTERESTS = [
  'SEO',
  'AI search',
  'Google Ads',
  'Facebook & Instagram',
  'Link building',
  'Website',
  'Custom tool',
]

const BUDGETS = ['< $5k', '$5–15k', '$15–50k', '$50k+']

const PERKS = [
  'Clear next steps for search, ads, or a custom build',
  'A dedicated account manager from day one',
  'A plan you approve before anything ships',
]

const FORM_ENDPOINT =
  'https://formsubmit.co/ajax/sumant.v@sparkhat.com'

export function Contact() {
  const [params] = useSearchParams()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [message, setMessage] = useState('')
  const [picked, setPicked] = useState<string[]>([])
  const [budget, setBudget] = useState<string | null>(null)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const idea = params.get('idea')
    if (idea) {
      setMessage(`Tool idea: ${idea}`)
      setPicked(['Custom tool'])
    }
  }, [params])

  const toggle = (label: string) => {
    setPicked((prev) =>
      prev.includes(label) ? prev.filter((x) => x !== label) : [...prev, label],
    )
  }

  const send = async () => {
    if (!name.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError(true)
      setSubmitError('')
      return
    }

    setError(false)
    setSubmitError('')
    setSending(true)

    const body = {
      name: name.trim(),
      email: email.trim(),
      website: website.trim() || '—',
      interested_in: picked.length ? picked.join(', ') : '—',
      monthly_budget: budget || '—',
      message: message.trim() || '—',
      _subject: `SparkHat strategy call — ${name.trim()}`,
      _replyto: email.trim(),
      _template: 'table',
      _captcha: 'false',
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(body),
      })
      const data = (await res.json().catch(() => null)) as {
        success?: string | boolean
        message?: string
      } | null

      const ok =
        res.ok &&
        (data?.success === true ||
          data?.success === 'true' ||
          String(data?.message || '')
            .toLowerCase()
            .includes('success'))

      if (!ok) {
        throw new Error(
          data?.message || 'Could not send — try again in a moment.',
        )
      }

      setSent(true)
    } catch (e) {
      setSubmitError(
        e instanceof Error
          ? e.message
          : 'Could not send — try again in a moment.',
      )
    } finally {
      setSending(false)
    }
  }

  const firstName = name.split(' ')[0] || 'there'

  return (
    <section
      className="wrap"
      style={{
        padding: '64px 28px 88px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
        gap: 48,
        alignItems: 'start',
      }}
    >
      <div>
        <div className="type-line">&gt; sparkhat book --call</div>
        <h1 className="display display-lg" style={{ marginTop: 16 }}>
          Book a
          <br />
          <span style={{ color: 'var(--b)' }}>strategy call</span>
        </h1>
        <p className="lead" style={{ maxWidth: 460 }}>
          30 minutes with a senior strategist. You&apos;ll leave knowing where
          your growth is leaking — whether we work together or not.
        </p>
        <div
          className="panel"
          style={{ marginTop: 28, borderColor: 'rgba(var(--a-rgb), .25)' }}
        >
          <div
            style={{
              padding: '10px 16px',
              borderBottom: '1px solid rgba(var(--a-rgb), .2)',
              fontSize: 12,
              color: 'var(--dim)',
            }}
          >
            // what you get
          </div>
          {PERKS.map((text, i) => (
            <div
              key={text}
              style={{
                display: 'flex',
                gap: 12,
                padding: '14px 16px',
                borderBottom: '1px solid rgba(var(--a-rgb), .1)',
                fontSize: 14,
              }}
            >
              <span style={{ color: 'var(--a)' }}>0{i + 1}</span>
              {text}
            </div>
          ))}
        </div>
      </div>

      <div
        className="panel panel-glow"
        style={{ borderColor: 'rgba(var(--a-rgb), .35)' }}
      >
        <div className="panel-head">
          <span>booking_form</span>
          <span style={{ color: 'var(--ok)' }}>● secure</span>
        </div>
        {!sent ? (
          <div
            style={{
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 12,
              }}
            >
              <label className="field">
                name*
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  autoComplete="name"
                  disabled={sending}
                />
              </label>
              <label className="field">
                work_email*
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@company.com"
                  autoComplete="email"
                  disabled={sending}
                />
              </label>
            </div>
            <label className="field">
              website
              <input
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="company.com"
                autoComplete="url"
                disabled={sending}
              />
            </label>
            <div>
              <div style={{ fontSize: 12, color: 'var(--dim)' }}>
                interested_in
              </div>
              <div className="chip-grid" style={{ marginTop: 8 }}>
                {INTERESTS.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className={`chip${picked.includes(label) ? ' on' : ''}`}
                    onClick={() => toggle(label)}
                    disabled={sending}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: 'var(--dim)' }}>
                monthly_budget
              </div>
              <div
                style={{
                  marginTop: 8,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                  gap: 6,
                }}
              >
                {BUDGETS.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className={`chip${budget === label ? ' on' : ''}`}
                    style={{ textAlign: 'center', padding: 10 }}
                    onClick={() => setBudget(label)}
                    disabled={sending}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <label className="field">
              message
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What are you trying to grow or build?"
                rows={4}
                disabled={sending}
              />
            </label>
            {error && (
              <div style={{ fontSize: 13, color: '#F2A08C' }}>
                ! error: name and a valid work email are required
              </div>
            )}
            {submitError && (
              <div style={{ fontSize: 13, color: '#F2A08C' }}>
                ! error: {submitError}
              </div>
            )}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => void send()}
              disabled={sending}
              style={{ opacity: sending ? 0.7 : 1 }}
            >
              {sending ? 'Sending…' : 'Book my call →'}
            </button>
          </div>
        ) : (
          <div style={{ padding: '48px 24px', fontSize: 14, lineHeight: 1.9 }}>
            <div style={{ color: 'var(--dim)' }}>&gt; submitting…</div>
            <div style={{ color: 'var(--ok)' }}>✓ request received</div>
            <div style={{ color: 'var(--fg)' }}>
              &gt; Thanks {firstName}. We&apos;ll email times for your call
              within one business day.
              <span
                style={{
                  display: 'inline-block',
                  width: 8,
                  height: 15,
                  marginLeft: 4,
                  background: 'var(--a)',
                  verticalAlign: -2,
                  animation: 'tb-blink 1s step-end infinite',
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
