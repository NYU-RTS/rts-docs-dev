import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description="Description will go into a meta tag in <head />"
      title={`Hello from ${siteConfig.title}`}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />

        <section className="padding--lg">
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <div className="text--center">
                  <Heading as="h2">
                    Find the Right Storage for Your Research
                  </Heading>
                  <p className="margin-top--md">
                    Not sure which storage solution is right for your research
                    data? The Storage Finder tool helps you identify the best
                    storage options based on your specific needs. Answer a few
                    simple questions about your data requirements, and
                    we&rsquo;ll help you make the right choice.
                  </p>
                  <Link
                    className="button button--primary button--lg margin-top--md margin-bottom--lg"
                    to="/storage-finder"
                  >
                    Find Your Storage Solution
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
