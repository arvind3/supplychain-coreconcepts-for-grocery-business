import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const chapterJourney = [
  {
    id: '01-grocery-supply-chain-basics',
    title: 'Foundations',
    detail: 'Understand lifecycle, product movement, and core terminology.',
  },
  {
    id: '04-demand-forecasting-and-planning',
    title: 'Planning',
    detail: 'Learn forecasting, safety stock, and planning trade-offs.',
  },
  {
    id: '05-procurement-and-supplier-management',
    title: 'Procurement',
    detail: 'See how orders, suppliers, and lead times are managed.',
  },
  {
    id: '06-inbound-logistics-and-warehouse',
    title: 'Operations',
    detail: 'Follow inbound logistics, DC tasks, and dispatch readiness.',
  },
  {
    id: '08-core-systems-and-integrations',
    title: 'Systems',
    detail: 'Map ERP, WMS, TMS, POS, OMS, and integration dependencies.',
  },
  {
    id: '09-quality-engineering-test-scenarios',
    title: 'QE Mapping',
    detail: 'Translate domain flows into end-to-end test strategy.',
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Supply Chain Core Concepts for the Grocery Business"
      description="Beginner-friendly, structured supply chain learning for QE and IT teams."
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroMain}>
            <p className={styles.badge}>Interactive Domain Book</p>
            <Heading as="h1" className={styles.heroTitle}>
              Supply Chain Core Concepts for the Grocery Business
            </Heading>
            <p className={styles.heroSubtitle}>
              A practical book for Quality Engineers and IT professionals to learn end-to-end grocery
              supply chain workflows, business roles, systems, and testing impact.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button--primary button--lg" to="/docs/book-overview">
                Start Reading
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/10-end-to-end-lifecycle-walkthrough">
                View End-to-End Flow
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div>
                <strong>11</strong>
                <span>Chapters</span>
              </div>
              <div>
                <strong>4</strong>
                <span>Learning Sections</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Beginner Friendly</span>
              </div>
            </div>
          </div>
          <aside className={styles.heroPanel}>
            <Heading as="h2">What Makes This Useful</Heading>
            <ul>
              <li>Consistent chapter format for faster learning</li>
              <li>Business use cases grounded in grocery operations</li>
              <li>Clear role mapping across planner, buyer, DC, store, and QE</li>
              <li>System-level view across ERP, WMS, TMS, POS, and OMS</li>
            </ul>
            <Link className={styles.inlineLink} to="/docs/11-glossary-and-next-steps">
              Open Glossary and Next Steps
            </Link>
          </aside>
        </section>

        <section className={styles.section}>
          <Heading as="h2">About The Book</Heading>
          <p className={styles.sectionIntro}>
            The book is structured for teams that need both domain understanding and delivery quality.
            Every chapter follows a standard format so readers can quickly map business concepts to
            practical engineering work.
          </p>
          <div className={styles.featureGrid}>
            <article className={styles.featureCard}>
              <Heading as="h3">Concept Explanation</Heading>
              <p>Simple definitions with practical context and plain language.</p>
            </article>
            <article className={styles.featureCard}>
              <Heading as="h3">Business Use Case</Heading>
              <p>Real scenarios from demand planning to store fulfillment.</p>
            </article>
            <article className={styles.featureCard}>
              <Heading as="h3">Users Involved</Heading>
              <p>Role clarity across planners, buyers, stores, warehouses, and IT.</p>
            </article>
            <article className={styles.featureCard}>
              <Heading as="h3">Tools And Technologies</Heading>
              <p>Platform view of systems used in modern grocery supply chains.</p>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <Heading as="h2">Who Should Read This</Heading>
          <div className={styles.audienceGrid}>
            <article>
              <Heading as="h3">Quality Engineers</Heading>
              <p>Create stronger regression coverage using business-process understanding.</p>
            </article>
            <article>
              <Heading as="h3">IT And Integration Teams</Heading>
              <p>Understand cross-system dependencies and operational failure points.</p>
            </article>
            <article>
              <Heading as="h3">New Retail Team Members</Heading>
              <p>Ramp up quickly on grocery workflows and role responsibilities.</p>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <Heading as="h2">Chapter Journey</Heading>
          <div className={styles.journeyGrid}>
            {chapterJourney.map((chapter, index) => (
              <Link key={chapter.id} className={styles.journeyCard} to={`/docs/${chapter.id}`}>
                <span className={styles.journeyNumber}>{String(index + 1).padStart(2, '0')}</span>
                <Heading as="h3">{chapter.title}</Heading>
                <p>{chapter.detail}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.bottomCta}>
          <Heading as="h2">Ready To Learn The Full Grocery Supply Chain Lifecycle?</Heading>
          <p>
            Start with the overview or jump directly into the first chapter to build practical domain
            confidence.
          </p>
          <div className={styles.heroActions}>
            <Link className="button button--primary button--lg" to="/docs/book-overview">
              Book Overview
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/01-grocery-supply-chain-basics">
              Start Chapter 1
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
