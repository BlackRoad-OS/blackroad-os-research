import type { NextPage } from 'next';
import Head from 'next/head';

const SECTIONS = [
  {
    title: 'Core Foundations',
    items: [
      {
        label: 'SIG Overview',
        href: 'sig/sig-overview.md',
        description: 'Spiral Information Geometry: (r, θ, τ) coordinate system, interference patterns, and factor-tree projection.',
      },
      {
        label: 'PS-SHA∞ Identity',
        href: 'ps-sha-infinity/definition.md',
        description: 'Identity-first hashing, worldline anchoring, and separation of identity vs. truth.',
      },
      {
        label: 'Lucidia Kernel',
        href: 'lucidia/architecture.md',
        description: 'Mesh-based Generation-0 agent kernel, QLM-inspired routing, and contradiction handling.',
      },
      {
        label: 'RoadChain Ledger',
        href: 'roadchain/ledger-theory.md',
        description: 'Event journaling, deterministic aggregation, and block formation aligned to PS-SHA∞.',
      },
    ],
  },
  {
    title: 'Papers',
    items: [
      {
        label: 'Trinary Logic',
        href: 'papers/agent-architecture/trinary-logic.md',
        description: 'Three-state reasoning and aggregation rules for BlackRoad OS agents.',
      },
      {
        label: 'Contradiction Handling',
        href: 'papers/agent-architecture/contradiction-handling.md',
        description: 'Managing disagreement, escalation patterns, and resolution strategies.',
      },
      {
        label: 'SIG Factor Tree',
        href: 'papers/spiral-information-geometry/sig-factor-tree.md',
        description: 'Prime-factor DNA and tree mapping for agents on the spiral.',
      },
      {
        label: 'Finance Automation',
        href: 'papers/finance-automation/automated-finance-architecture.md',
        description: 'Architecture for regulated-industry financial automation agents.',
      },
      {
        label: 'Truth Engine Spec (Draft)',
        href: 'papers/draft/truth-engine-spec.md',
        description: 'Speculative draft for a quantum-inspired truth aggregation engine.',
      },
    ],
  },
  {
    title: 'Experiments & Simulations',
    items: [
      {
        label: 'Contradiction Simulator',
        href: 'experiments/contradiction-sim/README.md',
        description: 'Trinary belief aggregation and conflict scoring sandbox.',
      },
      {
        label: 'SIG Visualizations',
        href: 'experiments/sig-visualizations/README.md',
        description: 'Text-based factor tree rendering and spiral coordinate experiments.',
      },
    ],
  },
  {
    title: 'Glossary & Reference',
    items: [
      {
        label: 'Concepts',
        href: 'glossary/concepts.md',
        description: 'Canonical definitions across SIG, PS-SHA∞, agents, and orchestration.',
      },
      {
        label: 'Symbols',
        href: 'glossary/symbols.md',
        description: 'Symbol table for recurrent notation used across all documents.',
      },
      {
        label: 'JSON Schemas',
        href: 'schemas/',
        description: 'Machine-readable schemas for PS-SHA∞ journal entries, SIG nodes, and agent identity.',
      },
    ],
  },
];

const REPO_BASE = 'https://github.com/BlackRoad-OS/blackroad-os-research/blob/main/';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BlackRoad OS Research</title>
        <meta name="description" content="Research and theory hub for BlackRoad OS: Spiral Information Geometry, PS-SHA∞, Lucidia, RoadChain, and agent orchestration." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={styles.page}>
        <header style={styles.header}>
          <div style={styles.headerInner}>
            <div style={styles.badge}>R&amp;D</div>
            <h1 style={styles.title}>BlackRoad OS Research</h1>
            <p style={styles.subtitle}>
              The theory and experiment hub for Spiral Information Geometry, PS-SHA∞ identity, Lucidia agent kernel, and RoadChain ledger research.
            </p>
            <a
              href={REPO_BASE}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.repoLink}
            >
              View on GitHub →
            </a>
          </div>
        </header>

        <main style={styles.main}>
          {SECTIONS.map((section) => (
            <section key={section.title} style={styles.section}>
              <h2 style={styles.sectionTitle}>{section.title}</h2>
              <div style={styles.grid}>
                {section.items.map((item) => (
                  <a
                    key={item.label}
                    href={`${REPO_BASE}${item.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.card}
                  >
                    <span style={styles.cardTitle}>{item.label}</span>
                    <span style={styles.cardDesc}>{item.description}</span>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </main>

        <footer style={styles.footer}>
          <p style={styles.footerText}>
            BlackRoad OS Research &mdash; Proprietary &amp; Confidential &mdash;{' '}
            <a
              href={`${REPO_BASE}LICENSE`}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.footerLink}
            >
              License
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0f',
    color: '#e2e8f0',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    borderBottom: '1px solid #1e293b',
    padding: '48px 24px 40px',
  },
  headerInner: {
    maxWidth: '960px',
    margin: '0 auto',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#1e293b',
    color: '#94a3b8',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    padding: '3px 10px',
    borderRadius: '4px',
    marginBottom: '16px',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: '32px',
    fontWeight: 800,
    margin: '0 0 12px',
    color: '#f1f5f9',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '16px',
    color: '#94a3b8',
    margin: '0 0 20px',
    maxWidth: '600px',
    lineHeight: 1.6,
  },
  repoLink: {
    color: '#6366f1',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 600,
  },
  main: {
    flex: 1,
    maxWidth: '960px',
    margin: '0 auto',
    padding: '40px 24px',
    width: '100%',
    boxSizing: 'border-box',
  },
  section: {
    marginBottom: '48px',
  },
  sectionTitle: {
    fontSize: '13px',
    fontWeight: 700,
    color: '#6366f1',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    margin: '0 0 20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '16px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    padding: '20px',
    backgroundColor: '#0f172a',
    border: '1px solid #1e293b',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'border-color 0.15s ease',
    cursor: 'pointer',
  },
  cardTitle: {
    color: '#e2e8f0',
    fontWeight: 600,
    fontSize: '15px',
  },
  cardDesc: {
    color: '#64748b',
    fontSize: '13px',
    lineHeight: 1.5,
  },
  footer: {
    borderTop: '1px solid #1e293b',
    padding: '24px',
  },
  footerText: {
    textAlign: 'center',
    color: '#475569',
    fontSize: '13px',
    margin: 0,
  },
  footerLink: {
    color: '#475569',
    textDecoration: 'underline',
  },
};

export default Home;
