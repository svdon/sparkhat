import { Link } from 'react-router-dom'

export function SiteFooter({ showCta = true }: { showCta?: boolean }) {
  return (
    <footer className="site-footer">
      {showCta && (
        <div className="footer-cta">
          <div className="footer-cta-inner">
            <div>
              <div
                style={{
                  font: "400 13px 'IBM Plex Mono', monospace",
                  color: '#16232A',
                }}
              >
                &gt; next_step
              </div>
              <h2
                className="display display-md"
                style={{ margin: '12px 0 0', color: '#070A0C' }}
              >
                Get a free growth audit
              </h2>
              <p
                style={{
                  margin: '12px 0 0',
                  maxWidth: 520,
                  font: "400 15px/1.7 'IBM Plex Mono', monospace",
                  color: '#16232A',
                }}
              >
                30 minutes with a senior strategist. We review your search
                rankings, ad accounts and website live on the call.
              </p>
            </div>
            <Link to="/contact" className="btn btn-dark">
              Book a call →
            </Link>
          </div>
        </div>
      )}
      <div className="footer-grid">
        <div>
          <img
            src="/assets/sparkhat-logo-dark-bg.png"
            alt="SparkHat"
            style={{ height: 64, width: 'auto' }}
          />
          <p
            style={{
              margin: '14px 0 0',
              color: 'var(--muted)',
              lineHeight: 1.6,
            }}
          >
            Your secret weapon for business growth.
          </p>
        </div>
        <div className="footer-col">
          <span style={{ color: 'var(--a)', fontSize: 12 }}>[ GROW ]</span>
          <Link to="/services#seo">SEO</Link>
          <Link to="/services#ai">AI search</Link>
          <Link to="/services#ads">Google Ads</Link>
          <Link to="/services#social">Facebook &amp; Instagram</Link>
        </div>
        <div className="footer-col">
          <span style={{ color: 'var(--b)', fontSize: 12 }}>[ BUILD ]</span>
          <Link to="/build">Custom websites</Link>
          <Link to="/build">Tools &amp; software</Link>
        </div>
        <div className="footer-col">
          <span style={{ color: 'var(--c)', fontSize: 12 }}>[ COMPANY ]</span>
          <Link to="/pricing">Pricing &amp; FAQ</Link>
          <a href="https://blog.sparkhat.com/" target="_blank" rel="noreferrer">
            Blog
          </a>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © 2026 SparkHat · status:{' '}
          <span style={{ color: 'var(--ok)' }}>all systems go</span>
        </span>
        <div style={{ display: 'flex', gap: 20 }}>
          <a href="#privacy">privacy</a>
          <a href="#terms">terms</a>
          <a href="#cookies">cookies</a>
        </div>
      </div>
    </footer>
  )
}
