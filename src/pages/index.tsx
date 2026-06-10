import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Systems Operations Center Platform">
      <main style={{padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h1 style={{fontSize: '3.5rem', fontWeight: '800', color: 'var(--ifm-color-primary)'}}>
            🚀 Systems Operations Hub
          </h1>
          <p style={{fontSize: '1.5rem', opacity: 0.7}}>
            The definitive Docs-as-Ops Engineering and Automation Platform.
          </p>
          <div style={{marginTop: '2rem'}}>
            <Link
              className="button button--primary button--lg"
              style={{padding: '1rem 2.5rem', fontSize: '1.2rem', fontWeight: 'bold', borderRadius: '8px'}}
              to="/docs/operations-home">
              Enter Operations Console →
            </Link>
          </div>
        </div>

        <hr style={{margin: '3rem 0', opacity: 0.2}} />

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
          <div style={{border: '1px solid var(--ifm-contents-border-color)', padding: '2rem', borderRadius: '12px', background: 'var(--ifm-background-surface-color)'}}>
            <h3>🛡️ Automated Gating</h3>
            <p>Every commit undergoes progressive linting, secret validation, and semantic structural scanning automatically.</p>
          </div>
          <div style={{border: '1px solid var(--ifm-contents-border-color)', padding: '2rem', borderRadius: '12px', background: 'var(--ifm-background-surface-color)'}}>
            <h3>📦 Environment Provisioning</h3>
            <p>Step-by-step cryptographic configurations, remote runtime structures, and secure pipeline handshakes.</p>
          </div>
          <div style={{border: '1px solid var(--ifm-contents-border-color)', padding: '2rem', borderRadius: '12px', background: 'var(--ifm-background-surface-color)'}}>
            <h3>⚡ Self-Hosted Execution</h3>
            <p>Compiled locally on bare-metal infrastructure, ensuring maximum isolation and zero data egress vulnerabilities.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
