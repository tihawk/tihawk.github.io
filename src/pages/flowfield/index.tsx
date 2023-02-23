import Layout from "@theme/Layout"
import React from "react"

function FlowField() {
  return (
    <Layout>
      <div style={{height: '100vh', display: 'flex'}}>
        <iframe scrolling="no" style={{flex: 1}} src="/flowfield/flowfield.html"></iframe>
      </div>
    </Layout>
  )
}

export default FlowField