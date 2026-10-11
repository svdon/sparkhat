import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BUILD_PLANS, FAQS, GROW_PLANS } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export function Pricing() {
  const [mode, setMode] = useState<'grow' | 'build'>('grow')
  const [open, setOpen] = useState(0)
  const plans = mode === 'grow' ? GROW_PLANS : BUILD_PLANS
  useReveal([mode])

  return (
    <>
      <section className="wrap" style={{ padding: '64px 28px 72px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div className="type-line">&gt; cat pricing.md</div>
            <h1 className="display display-lg" style={{ marginTop: 16 }}>
              Clear <span style={{ color: 'var(--c)' }}>pricing</span>
            </h1>
            <p className="lead" style={{ marginTop: 12, maxWidth: 520, fontSize: 15 }}>
              Monthly plans for growth, fixed-price projects for builds. Every
              engagement starts with a free audit.
            </p>
          </div>
          <div
            role="tablist"
            style={{ display: 'flex', border: '1px solid rgba(var(--a-rgb), .35)' }}
          >
            {(
              [
                ['grow', 'Grow · monthly'],
                ['build', 'Build · project'],
              ] as const
            ).map(([k, label]) => (
              <button
                key={k}
                type="button"
                role="tab"
                onClick={() => setMode(k)}
                style={{
                  all: 'unset',
                  cursor: 'pointer',
                  padding: '12px 20px',
                  font: "600 13px 'Chakra Petch', sans-serif",
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  background: mode === k ? 'var(--a)' : 'transparent',
                  color: mode === k ? '#070A0C' : 'var(--muted)',
                  transition: 'all .2s',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 32,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 16,
          }}
        >
          {plans.map((p) => (
            <div
              key={p.file}
              data-reveal
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: `1px solid ${p.hot ? 'var(--b)' : 'rgba(var(--a-rgb), .25)'}`,
                background: 'rgba(var(--s-rgb), .94)',
                boxShadow: p.hot
                  ? '0 0 60px -18px rgba(var(--b-rgb), .6)'
                  : 'none',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '12px 20px',
                  fontSize: 12,
                  background: p.hot ? 'var(--a)' : 'rgba(var(--a-rgb), .08)',
                  color: p.hot ? '#070A0C' : 'var(--a)',
                  fontWeight: p.hot ? 500 : 400,
                }}
              >
                <span>{p.file}</span>
                <span>{p.hot ? '★ most chosen' : ''}</span>
              </div>
              <div
                style={{
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    font: "700 24px 'Chakra Petch', sans-serif",
                    textTransform: 'uppercase',
                    color: 'var(--hi)',
                  }}
                >
                  {p.name}
                </h2>
                <p
                  style={{
                    margin: '8px 0 0',
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: 'var(--muted)',
                  }}
                >
                  {p.desc}
                </p>
                <div
                  style={{
                    marginTop: 22,
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 8,
                  }}
                >
                  <span style={{ fontSize: 12, color: 'var(--dim)' }}>from</span>
                  <span
                    style={{
                      font: "700 38px 'Chakra Petch', sans-serif",
                      color: 'var(--hi)',
                    }}
                  >
                    {p.price}
                  </span>
                  <span style={{ fontSize: 13, color: 'var(--dim)' }}>
                    {p.unit}
                  </span>
                </div>
                <div style={{ marginTop: 18, flex: 1 }}>
                  {p.features.map((f) => (
                    <div
                      key={f}
                      style={{
                        display: 'flex',
                        gap: 10,
                        padding: '9px 0',
                        borderBottom: '1px dashed rgba(var(--a-rgb), .18)',
                        fontSize: 14,
                      }}
                    >
                      <span style={{ color: 'var(--ok)' }}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="btn"
                  style={{
                    marginTop: 22,
                    padding: 14,
                    fontSize: 14,
                    background: p.hot ? 'var(--b)' : 'transparent',
                    color: p.hot ? '#070A0C' : 'var(--a)',
                    border: '1px solid var(--a)',
                  }}
                >
                  Book a call →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p style={{ margin: '16px 0 0', fontSize: 12, color: 'var(--dim)' }}>
          // ad spend is billed separately and paid directly to Google and Meta.
        </p>
      </section>

      <section
        style={{
          borderTop: '1px solid rgba(var(--a-rgb), .22)',
          background: 'var(--s)',
        }}
      >
        <div
          className="wrap"
          style={{
            padding: '64px 28px 80px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 40,
            alignItems: 'flex-start',
          }}
        >
          <div style={{ flex: '1 1 280px' }}>
            <div className="section-label">[FAQ]</div>
            <h2 className="display display-md" style={{ marginTop: 10 }}>
              Straight answers
            </h2>
            <p
              style={{
                margin: '12px 0 0',
                fontSize: 14,
                lineHeight: 1.7,
                color: 'var(--muted)',
              }}
            >
              No shady stuff or games. Anything else, ask us on the call.
            </p>
          </div>
          <div
            style={{
              flex: '2 1 520px',
              minWidth: 0,
              borderTop: '1px solid rgba(var(--a-rgb), .25)',
            }}
          >
            {FAQS.map(([q, a], i) => {
              const isOpen = open === i
              return (
                <div
                  key={q}
                  style={{ borderBottom: '1px solid rgba(var(--a-rgb), .25)' }}
                >
                  <button
                    type="button"
                    className={`faq-btn${isOpen ? ' open' : ''}`}
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    {q}
                    <span
                      style={{
                        flex: 'none',
                        font: "400 14px 'IBM Plex Mono', monospace",
                        color: 'var(--a)',
                      }}
                    >
                      {isOpen ? '[–]' : '[+]'}
                    </span>
                  </button>
                  <div
                    className="faq-body"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div>
                      <p>{a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
