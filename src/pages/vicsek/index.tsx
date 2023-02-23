import Layout from "@theme/Layout"
import React from "react"

function Vicsec() {
  return (
    <Layout>
      <div style={{height: '100vh', display: 'flex'}}>
        <iframe scrolling="no" style={{flex: 1}} src="/vicsek/vicsek.html"></iframe>
      </div>
    </Layout>
  )
}

export default Vicsec