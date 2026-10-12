import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ACCENT,
  CLIENT_LOGOS,
  HOME_SERVICES,
  IDEA_EXAMPLES,
  STEPS,
  TESTIMONIALS,
} from '../data/content'
import { useReveal } from '../hooks/useReveal'

const TICKS = [
  ['GOOGLE', 'RANKED'],
  ['CHATGPT', 'CITED'],
  ['PERPLEXITY', 'CITED'],
  ['AI OVERVIEWS', 'FEATURED'],
  ['GOOGLE ADS', 'SCALING'],
  ['META ADS', 'SCALING'],
  ['NEW SITE', 'LIVE'],
  ['NEW TOOL', 'SHIPPED'],
] as const

const PANELS = [
  ['Organic traffic', '↑ trending'],
  ['AI citations', '↑ trending'],
  ['Paid ROAS', '↑ trending'],
  ['Pipeline', '↑ trending'],
] as const

const BAR_HEIGHTS = [
  22, 28, 25, 34, 30, 38, 42, 40, 48, 46, 55, 52, 60, 64, 62, 70, 74, 80, 86, 94,
]

export function Home() {
  const [idea, setIdea] = useState(0)
  useReveal([])

  useEffect(() => {
    const iv = window.setInterval(
      () => setIdea((i) => (i + 1) % IDEA_EXAMPLES.length),
      2800,
    )
    return () => clearInterval(iv)
  }, [])

  const ticks = [...TICKS, ...TICKS]

  return (
    <>
      <div className="ticker">
        <div className="ticker-track">
          {ticks.map(([k, v], i) => (
            <span key={`${k}-${i}`}>
              {k}{' '}
              <span style={{ color: ACCENT[i % 4] }}>{v}</span>
            </span>
          ))}
        </div>
      </div>

      <section
        className="wrap"
        style={{
          padding: '72px 28px 64px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: 48,
          alignItems: 'center',
        }}
      >
        <div>
          <div className="type-line">&gt; sparkhat --mode=growth</div>
          <h1 className="display display-xl" style={{ marginTop: 20 }}>
            Marketing that grows your business.
            <br />
            <span style={{ color: 'var(--b)' }}>
              Sites and tools built to perform.
            </span>
            <span
              className="cursor-blink"
              style={{ background: 'var(--b)' }}
            />
          </h1>
          <p className="lead" style={{ marginTop: 22, maxWidth: 540 }}>
            SEO, AI search, paid ads, websites, calculators, dashboards, and
            custom software. One team covering the marketing and the build.
          </p>
          <div
            style={{
              marginTop: 32,
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <Link to="/contact" className="btn btn-primary">
              Talk to us →
            </Link>
            <Link to="/build" className="btn btn-ghost">
              Pitch a build idea →
            </Link>
          </div>
          <div
            style={{
              marginTop: 36,
              display: 'flex',
              gap: 24,
              flexWrap: 'wrap',
              fontSize: 12,
              color: 'var(--dim)',
            }}
          >
            <span>✓ Fully managed</span>
            <span>✓ Dedicated account manager</span>
            <span>✓ Reporting on real sales data</span>
          </div>
        </div>

        <div className="panel panel-glow">
          <div className="panel-head">
            <span>growth_dashboard.live</span>
            <span style={{ color: 'var(--ok)' }}>● LIVE</span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 1,
              background: 'rgba(var(--a-rgb), .15)',
              borderBottom: '1px solid rgba(var(--a-rgb), .15)',
            }}
          >
            {PANELS.map(([k, v], i) => (
              <div
                key={k}
                style={{ background: 'var(--s)', padding: '16px 18px' }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {k}
                </div>
                <div
                  style={{
                    marginTop: 6,
                    font: "600 20px 'Chakra Petch', sans-serif",
                    color: ACCENT[i],
                  }}
                >
                  {v}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              padding: '18px 18px 8px',
              display: 'flex',
              alignItems: 'flex-end',
              gap: 5,
              height: 150,
            }}
          >
            {BAR_HEIGHTS.map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  background: 'linear-gradient(var(--a), rgba(var(--a-rgb), .15))',
                  transformOrigin: 'bottom',
                  animation: `tb-up 1s ${i * 0.05}s cubic-bezier(.2,.9,.1,1) both`,
                }}
              />
            ))}
          </div>
          <div
            style={{
              padding: '0 18px 14px',
              fontSize: 11,
              color: 'var(--dim)',
            }}
          >
            Illustrative — replace with a real client dashboard
          </div>
        </div>
      </section>

      <section className="wrap" style={{ padding: '16px 28px 72px' }}>
        <div style={{ fontSize: 12, color: 'var(--dim)' }}>// trusted by</div>
        <div
          data-reveal
          style={{
            marginTop: 14,
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(100%, max(140px, calc((100% - 1px) / 4))), 1fr))',
            gap: 1,
            background: 'rgba(var(--a-rgb), .35)',
            border: '1px solid rgba(var(--a-rgb), .35)',
          }}
        >
          {CLIENT_LOGOS.map((logo) => (
            <div
              key={logo.name}
              style={{
                height: 108,
                background: '#B8E4F7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 20px',
              }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: logo.maxHeight ?? 56,
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  mixBlendMode: logo.blend ?? 'multiply',
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ padding: '40px 28px 80px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 20,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div className="section-label">[01] SERVICES</div>
            <h2 data-reveal className="display display-md" style={{ marginTop: 10 }}>
              Everything you need to grow
            </h2>
          </div>
          <Link to="/services" style={{ fontSize: 13 }}>
            view all services →
          </Link>
        </div>
        <div
          style={{
            marginTop: 28,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 1,
            background: 'rgba(var(--a-rgb), .25)',
            border: '1px solid rgba(var(--a-rgb), .25)',
          }}
        >
          {HOME_SERVICES.map((s, i) => (
            <Link
              key={s.name}
              data-reveal
              to={s.href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                padding: 26,
                background: 'var(--bg)',
                color: 'var(--fg)',
                transition: 'background .25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--s2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 12,
                }}
              >
                <span style={{ color: ACCENT[i % 3] }}>
                  [0{i + 1}]
                </span>
                <span style={{ color: 'var(--dim)' }}>{s.tag}</span>
              </div>
              <h3
                style={{
                  margin: '4px 0 0',
                  font: "600 21px/1.15 'Chakra Petch', sans-serif",
                  textTransform: 'uppercase',
                  color: 'var(--hi)',
                }}
              >
                {s.name}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: 'var(--muted)',
                }}
              >
                {s.line}
              </p>
              <span
                style={{
                  marginTop: 'auto',
                  paddingTop: 8,
                  fontSize: 12,
                  color: 'var(--a)',
                }}
              >
                learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        style={{
          borderTop: '1px solid rgba(var(--a-rgb), .22)',
          borderBottom: '1px solid rgba(var(--a-rgb), .22)',
          background: 'var(--s)',
        }}
      >
        <div className="wrap" style={{ padding: '72px 28px' }}>
          <div className="section-label">[02] HOW IT WORKS</div>
          <h2 data-reveal className="display display-md" style={{ marginTop: 10 }}>
            Four steps. No surprises.
          </h2>
          <div
            style={{
              marginTop: 36,
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: 20,
            }}
          >
            {STEPS.map((st, i) => (
              <div
                key={st.title}
                data-reveal
                style={{
                  position: 'relative',
                  paddingTop: 22,
                  borderTop: `2px solid ${ACCENT[i]}`,
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
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: 12,
                  }}
                >
                  <span style={{ color: ACCENT[i] }}>STEP 0{i + 1}</span>
                  <span style={{ color: 'var(--dim)' }}>{st.time}</span>
                </div>
                <h3
                  style={{
                    margin: '12px 0 0',
                    font: "600 22px 'Chakra Petch', sans-serif",
                    textTransform: 'uppercase',
                    color: 'var(--hi)',
                  }}
                >
                  {st.title}
                </h3>
                <p
                  style={{
                    margin: '8px 0 0',
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: 'var(--muted)',
                  }}
                >
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap" style={{ padding: '80px 28px' }}>
        <div className="section-label">[03] TESTIMONIALS</div>
        <h2 data-reveal className="display display-md" style={{ marginTop: 10 }}>
          What clients say
        </h2>
        <div
          style={{
            marginTop: 28,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 16,
          }}
        >
          {TESTIMONIALS.map((q) => (
            <figure
              key={q.who}
              data-reveal
              style={{
                margin: 0,
                padding: 24,
                border: '1px solid rgba(var(--a-rgb), .25)',
                background: 'rgba(var(--s-rgb), .9)',
              }}
            >
              <div
                aria-hidden
                style={{
                  font: "700 36px/1 'Chakra Petch', sans-serif",
                  color: 'var(--a)',
                  opacity: 0.85,
                }}
              >
                ”
              </div>
              <blockquote
                style={{
                  margin: '10px 0 0',
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: 'var(--fg)',
                }}
              >
                {q.text}
              </blockquote>
              <figcaption
                style={{
                  marginTop: 16,
                  fontSize: 12,
                  color: 'var(--b)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                — {q.who}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ padding: '0 28px 80px' }}>
        <div
          data-reveal
          style={{
            position: 'relative',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: 32,
            alignItems: 'center',
            padding: 'clamp(28px, 4vw, 48px)',
            background: 'linear-gradient(135deg, #1c1914 0%, #2a2318 50%, #15201c 100%)',
            border: '1px solid rgba(var(--b-rgb), .35)',
            color: 'var(--hi)',
          }}
        >
          <div>
            <div style={{ fontSize: 12, color: 'var(--b)' }}>
              [04] BUILD STUDIO
            </div>
            <h2
              className="display display-md"
              style={{ marginTop: 10, color: 'var(--hi)' }}
            >
              Have an idea? We&apos;ll build it.
            </h2>
            <p
              style={{
                margin: '14px 0 0',
                maxWidth: 480,
                fontSize: 15,
                lineHeight: 1.7,
                color: 'var(--muted)',
              }}
            >
              Custom websites, calculators, dashboards, client portals and
              custom software — built by the same team that markets them.
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                width: '100%',
                padding: '16px 18px',
                background: 'var(--bg)',
                fontSize: 14,
                color: 'var(--fg)',
                border: '1px solid rgba(var(--b-rgb), .25)',
              }}
            >
              &gt; {IDEA_EXAMPLES[idea]}
              <span
                style={{
                  display: 'inline-block',
                  width: 8,
                  height: 15,
                  marginLeft: 4,
                  background: 'var(--b)',
                  verticalAlign: -2,
                  animation: 'tb-blink 1s step-end infinite',
                }}
              />
            </div>
            <Link to="/build" className="btn btn-primary" style={{ padding: '14px 22px' }}>
              Pitch your idea →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
