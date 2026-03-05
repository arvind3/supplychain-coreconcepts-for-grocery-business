import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const chapterClusters = [
  {
    heading: 'Foundations',
    chapters: 'Chapters 1-3',
    summary: 'Network model, master data integrity, and decision ownership.',
    to: '/docs/01-grocery-supply-chain-basics',
  },
  {
    heading: 'Planning and Procurement',
    chapters: 'Chapters 4-5',
    summary: 'Forecast design, safety stock, reorder logic, and supplier governance.',
    to: '/docs/04-demand-forecasting-and-planning',
  },
  {
    heading: 'Operations and Fulfillment',
    chapters: 'Chapters 6-7',
    summary: 'Cold chain, warehouse execution, replenishment, and last-mile constraints.',
    to: '/docs/06-inbound-logistics-and-warehouse',
  },
  {
    heading: 'Systems and Quality',
    chapters: 'Chapters 8-10',
    summary: 'Architecture dependencies, QE controls, and end-to-end lifecycle orchestration.',
    to: '/docs/08-core-systems-and-integrations',
  },
];

const roleTracks = [
  {
    role: 'Supply Chain Managers',
    path: 'Start with Chapters 1, 4, 6, and 7 to align planning and store execution.',
  },
  {
    role: 'Retail Operations Teams',
    path: 'Focus on Chapters 5, 6, 7, and 10 for operational reliability and throughput.',
  },
  {
    role: 'QE and Platform Teams',
    path: 'Read Chapters 2, 8, 9, and 10 to map domain risk to release quality.',
  },
  {
    role: 'Students and Analysts',
    path: 'Read in sequence and use Chapter 11 glossary to accelerate terminology fluency.',
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Supply Chain Core Concepts for the Grocery Business"
      description="Professional handbook for grocery supply chain operations, systems, and quality engineering."
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Professional Handbook</p>
            <Heading as="h1" className={styles.heroTitle}>
              Supply Chain Core Concepts for Grocery Business
            </Heading>
            <p className={styles.heroSubtitle}>
              A practical operating guide for planning, inventory, cold-chain logistics, warehouse execution,
              replenishment, and omnichannel fulfillment in modern grocery retail.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button--primary button--lg" to="/docs/book-overview">
                Start Reading
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/10-end-to-end-lifecycle-walkthrough">
                View Lifecycle Walkthrough
              </Link>
            </div>
          </div>
          <aside className={styles.heroPanel}>
            <Heading as="h2">At a Glance</Heading>
            <div className={styles.metricRow}>
              <div>
                <strong>11</strong>
                <span>Core Chapters</span>
              </div>
              <div>
                <strong>14</strong>
                <span>Embedded Visuals</span>
              </div>
              <div>
                <strong>5</strong>
                <span>Worked Calculations</span>
              </div>
            </div>
            <p>
              Built for practitioners who need clear operating logic, not generic definitions.
              The content mirrors real execution patterns used by large supermarket chains.
            </p>
            <Link to="/docs/11-glossary-and-next-steps" className={styles.inlineLink}>
              Open Glossary and Next Steps
            </Link>
          </aside>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <Heading as="h2">Book Architecture</Heading>
            <p>Each section builds operational depth while preserving practical reading flow.</p>
          </div>
          <div className={styles.clusterGrid}>
            {chapterClusters.map((cluster, idx) => (
              <Link key={cluster.heading} className={styles.clusterCard} to={cluster.to}>
                <span className={styles.clusterNumber}>{String(idx + 1).padStart(2, '0')}</span>
                <Heading as="h3">{cluster.heading}</Heading>
                <p className={styles.clusterMeta}>{cluster.chapters}</p>
                <p>{cluster.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <Heading as="h2">Recommended Reading Tracks</Heading>
            <p>Choose the sequence that matches your role and current business objectives.</p>
          </div>
          <div className={styles.trackGrid}>
            {roleTracks.map(track => (
              <article key={track.role} className={styles.trackCard}>
                <Heading as="h3">{track.role}</Heading>
                <p>{track.path}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.bottomCta}>
          <Heading as="h2">Move From Concepts to Operating Decisions</Heading>
          <p>
            Use the book as a reference for planning cycles, supplier reviews, warehouse operations,
            and release-quality validation across integrated grocery systems.
          </p>
          <div className={styles.heroActions}>
            <Link className="button button--primary button--lg" to="/docs/01-grocery-supply-chain-basics">
              Start Chapter 1
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/09-quality-engineering-test-scenarios">
              Open QE Scenarios
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
