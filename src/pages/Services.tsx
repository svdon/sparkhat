import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ACCENT, SERVICES } from '../data/content'
import { useReveal } from '../hooks/useReveal'

export function Services() {
  const { hash } = useLocation()
  useReveal([])

  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <>
      <section className="wrap" style={{ padding: '64px 28px 40px' }}>
        <div className="type-line">&gt; ls ./services</div>
        <h1 className="display display-lg" style={{ marginTop: 16 }}>
          One team. <span style={{ color: 'var(--b)' }}>Every channel.</span>
        </h1>
        <p className="lead">
          Pick one service or let us run the whole engine. Every engagement is
          fully managed, with a dedicated account manager and reporting tied to
          real sales data.
        </p>
      </section>

      <div
        className="wrap"
        style={{
          padding: '0 28px 80px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 40,
          alignItems: 'flex-start',
        }}
      >
        <aside
          style={{
            flex: '1 1 220px',
            maxWidth: '100%',
            position: 'sticky',
            top: 84,
            border: '1px solid rgba(var(--a-rgb), .25)',
            background: 'rgba(var(--s-rgb), .92)',
            fontSize: 13,
          }}
        >
          <div
            style={{
              padding: '12px 16px',
              borderBottom: '1px solid rgba(var(--a-rgb), .2)',
              color: 'var(--dim)',
            }}
          >
            // index
          </div>
          {SERVICES.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              style={{
                display: 'flex',
                gap: 10,
                padding: '11px 16px',
                color: 'var(--fg)',
                borderBottom: '1px solid rgba(var(--a-rgb), .1)',
              }}
            >
              <span style={{ color: ACCENT[i % 3] }}>0{i + 1}</span>
              {s.name}
            </a>
          ))}
        </aside>

        <div
          style={{
            flex: '999 1 520px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            minWidth: 0,
          }}
        >
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              data-reveal
              style={{
                scrollMarginTop: 84,
                border: '1px solid rgba(var(--a-rgb), .25)',
                background: 'rgba(var(--s-rgb), .92)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 12,
                  padding: '12px 20px',
                  borderBottom: '1px solid rgba(var(--a-rgb), .2)',
                  fontSize: 12,
                }}
              >
                <span style={{ color: ACCENT[i % 3] }}>
                  [0{i + 1}] {s.tag}
                </span>
                <span style={{ color: 'var(--dim)' }}>{s.time}</span>
              </div>
              <div
                style={{
                  padding: '24px 20px',
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: 28,
                }}
              >
                <div>
                  <h2
                    style={{
                      margin: 0,
                      font: "700 26px/1.1 'Chakra Petch', sans-serif",
                      textTransform: 'uppercase',
                      color: 'var(--hi)',
                    }}
                  >
                    {s.name}
                  </h2>
                  <p
                    style={{
                      margin: '12px 0 0',
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: 'var(--muted)',
                    }}
                  >
                    {s.desc}
                  </p>
                  <Link
                    to={s.id === 'build' ? '/build' : '/contact'}
                    className="btn btn-ghost"
                    style={{
                      display: 'inline-block',
                      marginTop: 18,
                      padding: '11px 16px',
                      borderColor: 'var(--a)',
                      color: 'var(--a)',
                      fontSize: 13,
                    }}
                  >
                    {s.id === 'build' ? 'Pitch your idea' : 'Talk to us'} →
                  </Link>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      color: 'var(--dim)',
                      marginBottom: 8,
                    }}
                  >
                    // what&apos;s included
                  </div>
                  {s.items.map((it) => (
                    <div
                      key={it}
                      style={{
                        display: 'flex',
                        gap: 10,
                        padding: '10px 0',
                        borderBottom: '1px dashed rgba(var(--a-rgb), .2)',
                        fontSize: 14,
                        color: 'var(--fg)',
                      }}
                    >
                      <span style={{ color: 'var(--ok)' }}>✓</span>
                      {it}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
