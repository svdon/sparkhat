import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ACCENT, BUILD_EXAMPLES } from '../data/content'
import { useReveal } from '../hooks/useReveal'

const BUILDS = [
  [
    'Custom websites',
    'Fast, premium sites with SEO built in from day one.',
    'e.g. marketing sites, landing pages',
  ],
  [
    'Calculators & quote tools',
    'Interactive tools that qualify leads and book jobs.',
    'e.g. pricing, ROI, configurators',
  ],
  [
    'Dashboards & portals',
    'Internal and client-facing tools that replace spreadsheets.',
    'e.g. reporting, order tracking',
  ],
  [
    'Booking & automation',
    'Systems that take repetitive work off your team.',
    'e.g. scheduling, intake forms',
  ],
] as const

const PHASES = [
  [
    'Scope',
    'week 1',
    'One call to map the idea, the users and the goal. You get a written scope and estimate.',
  ],
  [
    'Prototype',
    'weeks 2–3',
    'A clickable version early, so you can react to something real before we build.',
  ],
  [
    'Ship & grow',
    'launch +',
    'We launch, measure and market it — so it actually gets used.',
  ],
] as const

const CHIPS = [
  ['calculator', 'A pricing calculator for our website'],
  ['dashboard', 'A reporting dashboard for our team'],
  ['portal', 'A customer portal'],
  ['booking', 'A booking system for our business'],
] as const

export function Build() {
  const [idea, setIdea] = useState('')
  const [ph, setPh] = useState(0)
  useReveal([])

  useEffect(() => {
    const iv = window.setInterval(
      () => setPh((p) => (p + 1) % BUILD_EXAMPLES.length),
      3200,
    )
    return () => clearInterval(iv)
  }, [])

  const pitchHref = idea
    ? `/contact?idea=${encodeURIComponent(idea)}`
    : '/contact'

  return (
    <>
      <section
        className="wrap"
        style={{
          padding: '64px 28px 56px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
          gap: 48,
          alignItems: 'start',
        }}
      >
        <div>
          <div className="type-line">&gt; sparkhat build --new</div>
          <h1 className="display display-lg" style={{ marginTop: 16 }}>
            Have an idea?
            <br />
            <span style={{ color: 'var(--b)' }}>We&apos;ll build it.</span>
          </h1>
          <p className="lead" style={{ maxWidth: 500 }}>
            Websites, calculators, dashboards, client portals and custom
            software. Describe your idea in one line and we&apos;ll come to the
            call with a plan.
          </p>
          <div
            style={{
              marginTop: 28,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              fontSize: 14,
              color: 'var(--fg)',
            }}
          >
            <div style={{ display: 'flex', gap: 10 }}>
              <span style={{ color: 'var(--ok)' }}>✓</span>
              Written scope and estimate after one call
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <span style={{ color: 'var(--ok)' }}>✓</span>
              Clickable prototype before full build
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <span style={{ color: 'var(--ok)' }}>✓</span>
              Launched and marketed by the same team
            </div>
          </div>
        </div>

        <div className="panel panel-glow" style={{ borderColor: 'rgba(var(--a-rgb), .35)' }}>
          <div className="panel-head">
            <span>new_idea.txt</span>
            <span>
              {idea.length}/280
            </span>
          </div>
          <div style={{ display: 'flex', gap: 10, padding: '18px 16px 4px' }}>
            <span style={{ color: 'var(--a)', fontSize: 16, lineHeight: 1.6 }}>
              &gt;
            </span>
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value.slice(0, 280))}
              placeholder={`${BUILD_EXAMPLES[ph]}…`}
              maxLength={280}
              rows={4}
              style={{
                flex: 1,
                resize: 'none',
                border: 0,
                outline: 0,
                background: 'transparent',
                color: 'var(--hi)',
                font: "400 16px/1.6 'IBM Plex Mono', monospace",
                padding: 0,
              }}
            />
          </div>
          <div
            style={{
              padding: '8px 16px 16px',
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
            }}
          >
            <span style={{ fontSize: 12, color: 'var(--dim)', padding: '7px 0' }}>
              try:
            </span>
            {CHIPS.map(([label, text]) => (
              <button
                key={label}
                type="button"
                className="chip"
                style={{ padding: '6px 10px', fontSize: 12 }}
                onClick={() => setIdea(text)}
              >
                {label}
              </button>
            ))}
          </div>
          <div
            style={{
              padding: '14px 16px',
              borderTop: '1px solid rgba(var(--a-rgb), .2)',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Link
              to={pitchHref}
              className="btn btn-primary"
              style={{
                padding: '14px 22px',
                background: 'var(--b)',
                fontSize: 14,
              }}
            >
              Pitch it on a call →
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ padding: '24px 28px 72px' }}>
        <div className="section-label">[01] WHAT WE BUILD</div>
        <div
          style={{
            marginTop: 20,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 270px), 1fr))',
            gap: 1,
            background: 'rgba(var(--a-rgb), .25)',
            border: '1px solid rgba(var(--a-rgb), .25)',
          }}
        >
          {BUILDS.map(([name, desc, ex], i) => (
            <div
              key={name}
              data-reveal
              style={{
                padding: 26,
                background: 'var(--bg)',
                transition: 'background .25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--s2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg)'
              }}
            >
              <div style={{ fontSize: 12, color: ACCENT[i] }}>[0{i + 1}]</div>
              <h3
                style={{
                  margin: '14px 0 0',
                  font: "600 21px/1.15 'Chakra Petch', sans-serif",
                  textTransform: 'uppercase',
                  color: 'var(--hi)',
                }}
              >
                {name}
              </h3>
              <p
                style={{
                  margin: '10px 0 0',
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: 'var(--muted)',
                }}
              >
                {desc}
              </p>
              <div style={{ marginTop: 14, fontSize: 12, color: 'var(--dim)' }}>
                {ex}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          borderTop: '1px solid rgba(var(--a-rgb), .22)',
          background: 'var(--s)',
        }}
      >
        <div className="wrap" style={{ padding: '64px 28px 72px' }}>
          <div className="section-label">[02] HOW A BUILD WORKS</div>
          <div
            style={{
              marginTop: 28,
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: 20,
            }}
          >
            {PHASES.map(([title, time, desc], i) => (
              <div
                key={title}
                data-reveal
                style={{
                  position: 'relative',
                  paddingTop: 22,
                  borderTop: '2px solid rgba(var(--a-rgb), .3)',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: -6,
                    left: 0,
                    width: 10,
                    height: 10,
                    background: ACCENT[i],
                  }}
                />
                <div style={{ fontSize: 12, color: ACCENT[i] }}>
                  PHASE 0{i + 1} ·{' '}
                  <span style={{ color: 'var(--dim)' }}>{time}</span>
                </div>
                <h3
                  style={{
                    margin: '12px 0 0',
                    font: "600 22px 'Chakra Petch', sans-serif",
                    textTransform: 'uppercase',
                    color: 'var(--hi)',
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    margin: '8px 0 0',
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: 'var(--muted)',
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
