import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Supply Chain Core Concepts for the Grocery Business"
      description="Beginner-friendly, structured supply chain learning for QE and IT teams."
    >
      <header className="hero heroBanner">
        <div className="container">
          <h1 className="heroTitle">Supply Chain Core Concepts for the Grocery Business</h1>
          <p className="heroSubtitle">
            Understand grocery retail supply chain flows, business roles, systems, and testing angles
            in a practical, chapter-based format.
          </p>
          <div>
            <Link className="button button--primary button--lg" to="/docs/book-overview">
              Start Reading
            </Link>
          </div>
          <section className="featureGrid">
            <article className="featureCard">
              <h3>Business + Tech Together</h3>
              <p>Each chapter links business concepts with systems and quality engineering outcomes.</p>
            </article>
            <article className="featureCard">
              <h3>Consistent Chapter Format</h3>
              <p>Concept explanation, use case, users involved, and tools in every chapter.</p>
            </article>
            <article className="featureCard">
              <h3>Beginner Friendly</h3>
              <p>Simple language for new team members joining grocery retail programs.</p>
            </article>
          </section>
        </div>
      </header>
    </Layout>
  );
}
