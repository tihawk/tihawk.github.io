import Layout from "@theme/Layout"
import React from "react"
import clsx from 'clsx'
import styles from './index.module.css'

interface AppCardPropsI {
  name: string
  description: string
  tags: string[]
  url: string
}
function AppCard({name, description, tags, url}: AppCardPropsI) {
  return (
    <a className={styles.cleanLink} href={url}>
      <div className={clsx('card', styles.cardWithShadow)}>
        <div className="card__header">
          <h2>{name}</h2>
        </div>
        <div className="card__body">
          {description}
        </div>
        <div className="card__footer">
          {tags.map((tag, i) => (
            <span className="badge badge--primary margin-right--sm">{tag}</span>
          ))}
        </div>
      </div>
    </a>
  )
}

function AppsPage() {
  return (
    <Layout
      title="Kiril's apps"

    >
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            <h1 className="hero__title">Crafted for you</h1>
          </div>
        </div>
        <div className="row">
          <div className="col col--6">
            <AppCard name="PushFitnotes Desktop" description="Upload Fitnotes workouts to Garmin" tags={['windows', 'linux', 'free']} url="/push-fitnotes" />
          </div>
          <div className="col col--6">
            <AppCard name="PushFitnotes Android" description="Upload Fitnotes workouts to Garmin, but from your phone" tags={['android', 'coming-soon']} url="/push-fitnotes-android" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AppsPage
