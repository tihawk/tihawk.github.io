import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { FaGithub } from 'react-icons/fa'
import { MdDevicesOther, MdNewspaper } from 'react-icons/md'

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <main className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="avatar avatar--vertical">
          <img
            className={clsx('avatar__photo', styles.largeAvatarPhoto)}
            src="https://github.com/tihawk.png" />
        </div>
        <br/>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            style={{display: 'flex', alignItems: 'center'}}
            className="button button--info margin-right--lg button--lg"
            to="/blog">
            <MdNewspaper/>&nbsp;Blog
          </Link>
          <Link
            style={{display: 'flex', alignItems: 'center'}}
            className="button button--secondary button--lg"
            to="https://github.com/tihawk">
            <FaGithub/>&nbsp;Code
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Kiril Panayotov Blagoev's site">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
